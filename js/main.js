(function (d3) {

  const svg = d3.select('#front svg')

  const rand = d3.randomUniform(0, 200);
  const rand_color = d3.randomUniform(0.4, 0.2);

  // Create vertices
  const vertices = d3.range(400).map(() => [rand(), rand()])

  // Create Voroni
  const voronoi = d3.voronoi()

  const lines = svg
    .attr('viewBox', '50 50 100 50')
    .append('svg:g')
    .attr('id', 'lines')
    .selectAll('path')
    .data(voronoi.triangles(vertices))
    .enter().append('path')
    .attr('d', d => 'M'+d.join('L') + 'Z')
    .attr('fill', d => d3.rgb(1, 162, 166, rand_color()).toString())


})(d3)
