import pandas as pd
import matplotlib.pyplot as plt

df=pd.read_csv('data.csv')
t=df[['visits','product_views','add_to_cart','checkout','purchases','revenue']].sum()
for s in ['visits','product_views','add_to_cart','checkout','purchases']: print(s,round(t[s]/t.visits*100,2),'%')
source=df.groupby('source')[['visits','purchases','revenue']].sum();source['conversion_pct']=source.purchases/source.visits*100
print(source.sort_values('conversion_pct',ascending=False))
pd.DataFrame({'stage':['visits','product_views','add_to_cart','checkout','purchases'],'users':[t[x] for x in ['visits','product_views','add_to_cart','checkout','purchases']]}).plot(x='stage',y='users',kind='bar',legend=False,title='E-commerce Funnel')
plt.tight_layout();plt.savefig('funnel.png',dpi=160)
