import pandas as pd

df = pd.read_csv("data.csv")
df["lead_score"] = (df["fit_score"] * 0.55) + (df["intent_score"] * 0.45)

def route(score):
    if score >= 85:
        return "priority_outreach"
    if score >= 70:
        return "standard_outreach"
    return "nurture"

df["route"] = df["lead_score"].apply(route)

summary = {
    "leads": len(df),
    "priority_rate": round((df["route"] == "priority_outreach").mean() * 100, 1),
    "positive_response_rate": round((df["response"] == "positive").mean() * 100, 1),
    "avg_latency_sec": round(df["latency_sec"].mean(), 1)
}

print(summary)
print(df[["lead_id", "lead_score", "route", "workflow_status"]].sort_values("lead_score", ascending=False))
