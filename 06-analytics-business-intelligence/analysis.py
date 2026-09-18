import pandas as pd

df = pd.read_csv("data.csv")

customers = df[df.domain == "Customer"].copy()
customers["ltv_index"] = customers.metric_3
print("Customer segment revenue:")
print(customers.groupby("segment")["metric_1"].agg(["count","sum"]).sort_values("sum", ascending=False))

hr = df[df.domain == "HR"].copy()
print("\nHR overtime/satisfaction signal:")
print(hr.groupby("segment")[["metric_2","metric_4","metric_5"]].mean())

finance = df[df.domain == "Finance"].copy()
finance["operating_margin_check"] = finance["metric_5"]
print("\nFinancial trend:")
print(finance[["entity","metric_1","metric_4","operating_margin_check"]])

funds = df[df.domain == "Fund"].copy()
print("\nFund risk/return comparison:")
print(funds[["entity","segment","metric_1","metric_2","metric_4","metric_5"]].sort_values("metric_1", ascending=False))
