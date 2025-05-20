---
title: 'Soil erosion'
date: 2023-07-05
sidebar: false
---

:::: {.grid}

::: {.g-col-md-6 .g-col-12 .mt-3}

# Soil erosion

Soil erosion is a major threat to sustainability and productivity with knock-on effects on the climate crisis and food security. It decreases soil fertility negatively affecting crop yields on fields, while eroded sediments from upstream clog downstream, dams, rivers and canals causing sedimentation and flooding. This is particularly true for hilly areas in Ethiopia, Kenya and Rwanda with high erosion risk. Soil erosion can be prevented and arrested through soil and water conservation (SWC) or sustainable land management (SLM) practices. Current land use and land management practices including crop cultivation as well as grazing do not sufficiently consider local potential, limitations and climate and soil erosion risks.  While general information on improved land management may exist, context-based information on land resources, and climate and information on feasible SLM alternatives is not widely available or applied by land managers. ​

:::

::: {.g-col-md-6 .g-col-12 .mt-3}

![](../../img/threats/erosion.jpg)

:::

::::

---


:::: {.grid}

::: {.g-col-md-4 .g-col-12 .mt-3}
## LSC resources

Relevant resources about erosion in the LSC hub

<div id="list-res" class="pt-3"></div>

<script>
const url = "https://rwanda.lsc-hubs.org/cat/collections/metadata:main/items?f=json&limit=10&q=erosion&"; 
fetch(url).then(response => response.text()).then(data => {
html = "<div>";
data =  JSON.parse(data);

data.features.forEach(r => {
  try {
  p = r.properties;
  html +=           "<div class='card bg-opacity-10 bg-success h-100'>"+
                    "<div class='card-header rounded-top bg-success'><a href='https://rwanda.lsc-hubs.org/cat/collections/metadata:main/items/" +
                    encodeURIComponent(r.id) + "'>" +
                    (p.title ? p.title.substring(0, 60) : r.id) + "</a> "+(p.updated?'<br/>'+p.updated.split('T')[0]:'none')+"</div>"+
                    "<div class='card-body rounded-bottom'>"+
                    (p.description ? p.description.substring(0, 120) : "") + "</div></div>";
  } catch (e) {console.log(e)}
})
document.getElementById('list-res').innerHTML = html;
})
</script>

:::

::: {.g-col-md-4 .g-col-12 .mt-3}

## Textural class

Textural class (USDA) of the soil fine earth fraction, aggregated over the Effective Root Zone Depth for Maize, mapped at 1km resolution

```{=html}
<script>
var mymap = {"center":[-2,30],"zoom":5,layers: [
  {"name":"gyga_af_agg_erzd_texclss__m_1km","type":"wms","url":"https://maps.isric.org/mapserv?map=%2Fmap%2Fgyga.map"}
]}
</script>
```
{{< include ../../includes/_map.qmd >}}

- [Dataset](https://data.isric.org/geonetwork/srv/eng/catalog.search#/metadata/10aa9a99-1433-11e9-a8fa-a0481ca9e724) 


:::

::: {.g-col-md-4 .g-col-12 .mt-3}
## Other resources

- [Management approaches](https://qcat.wocat.net/en/wocat/list/?type=wocat&q=erosion&filter__qg_location__country=country_RWA) (Wocat)

:::

::::