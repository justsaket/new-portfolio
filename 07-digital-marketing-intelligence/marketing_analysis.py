import pandas as pd

df = pd.read_csv("data.csv")

paid = df[df["channel"] == "Paid Search"].copy()
paid["ctr"] = paid["clicks"] / paid["impressions"]
paid["cpc"] = paid["spend"] / paid["clicks"]
paid["conversion_rate"] = paid["conversions"] / paid["clicks"]
paid["roas"] = paid["revenue"] / paid["spend"]

print("Paid Search performance")
print(paid[["campaign","ctr","cpc","conversion_rate","roas"]].round(4))

seo = df[df["channel"] == "SEO"].copy()
print("\nSEO opportunity")
print(seo[["campaign","seo_score","engagement_rate"]].sort_values("seo_score"))

content = df[df["channel"] == "Content"].copy()
print("\nContent efficiency")
print(content[["campaign","engagement_rate","conversions","revenue"]])
