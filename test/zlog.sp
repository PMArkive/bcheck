#pragma semicolon 1
#pragma newdecls required

#include <sdktools>
#include <sdkhooks>
#include <sourcemod>

public Plugin myinfo = { name = "zvel logger" };

int logger;
float savpos[3];
ArrayList al;

enum struct LogData {
	int count;
	int speedo;
	float vel;
	float offs;
}

public void OnPluginStart() {
	al = new ArrayList(sizeof(LogData));
	RegConsoleCmd("sm_zlog", sm_zlog);
	RegConsoleCmd("sm_pos", sm_pos);
	RegConsoleCmd("sm_reset", sm_reset);
	RegConsoleCmd("sm_clear", sm_clear);
	RegConsoleCmd("sm_list", sm_list);
}

public Action sm_zlog(int client, int args) {
	if (logger > 0) {
		logger = 0;
		ReplyToCommand(client, "[zlog] Disabled logging");
		SDKUnhook(client, SDKHook_OnTakeDamagePost, OnTakeDamagePost);
	} else {
		logger = (args == 1 ? 2 : 1);
		ReplyToCommand(client, "[zlog] Enabled logging");
		SDKHook(client, SDKHook_OnTakeDamagePost, OnTakeDamagePost);
	}
	return Plugin_Handled;
}

public Action sm_pos(int client, int args) {
	float org[3]; GetEntPropVector(client, Prop_Data, "m_vecOrigin", org);
	PrintToChat(client, "POS: %f %f %f", org[0], org[1], org[2]);
	savpos = org;
	return Plugin_Handled;
}

public Action sm_clear(int client, int args) {
	al.Clear();
	if(args == 0) PrintToChat(client, "Array cleared!");
	return Plugin_Handled;
}

public Action sm_list(int client, int args) {
	for(int i = 0; i < al.Length; i++) {
		LogData ld; al.GetArray(i, ld);
		char buffer[64]; Format(buffer, sizeof(buffer), "[%i u/s] VEL: %f, OFFS: %f", ld.speedo, ld.vel, ld.offs);
		PrintToConsole(client, "%i > %s", ld.count, buffer);
	}
	if(args == 0) PrintToChat(client, "Printed %i items to console.", al.Length);
	return Plugin_Handled;
}

public Action sm_reset(int client, int args) {
	float ang[3] = { 90.0, 0.0, 0.0 };
	float vel[3] = { 0.0, 0.0, 0.0 };
	TeleportEntity(client, savpos, ang, vel);
	return Plugin_Handled;
}

public void OnTakeDamagePost(int client, int attacker, int inflictor, float damage, int damagetype, int weapon, float force[3], float pos[3]) {
	float vel[3]; GetEntPropVector(client, Prop_Data, "m_vecVelocity", vel);
	float org[3]; GetEntPropVector(client, Prop_Data, "m_vecOrigin", org);
	if (vel[2] > 0 && (damagetype == 2359360 || damagetype == 19136576)) {
		DataPack dp = new DataPack();
		dp.WriteCell(client);
		dp.WriteFloat(vel[2]);
		dp.WriteFloat(org[2] - savpos[2]);
		CreateTimer(0.1, AfterDamage, dp);
	}
}

public Action AfterDamage(Handle timer, DataPack dp) {
	dp.Reset();
	int client = dp.ReadCell();
	float zvel = dp.ReadFloat();
	float offs = dp.ReadFloat();
	
	float vel[3]; GetEntPropVector(client, Prop_Data, "m_vecVelocity", vel);
	float speedo = FloatAbs(SquareRoot(vel[0] * vel[0] + vel[1] * vel[1]));
	
	SaveVel(client, RoundToFloor(speedo), zvel, offs);
}

public void SaveVel(int client, int speedo, float vel, float offs) {
	char buffer[64]; Format(buffer, sizeof(buffer), "[%i u/s] VEL: %f, OFFS: %f", speedo, vel, offs);

	for(int i = 0; i < al.Length; i++) {
		LogData ld; al.GetArray(i, ld); 
		if(ld.speedo == speedo && ld.vel == vel && ld.offs == offs) {
			ld.count++;
			al.SetArray(i, ld);
			LogVel(client, ld.count, buffer);
			return;
		}
	}
	
	LogData ld;
	ld.count = 1;
	ld.speedo = speedo;
	ld.vel = vel;
	ld.offs = offs;
	al.PushArray(ld);
	LogVel(client, ld.count, buffer);
}

public void LogVel(int client, int count, char[] buffer) {
	if(logger == 1) PrintToChat(client, "%i > %s", count, buffer);
}