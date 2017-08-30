const regs = {
  main: /\{\{main( article)?\|(.*?)\}\}/i,
  wide_image: /\{\{wide image\|(.*?)\}\}/i
};

//just some easy, supported ones
const parseTemplates = function(r, wiki) {
  let templates = {};

  //{{main|toronto}}
  let main = wiki.match(regs.main);
  if (main) {
    templates.main = main[2].split('|');
    wiki = wiki.replace(regs.main, '');
  }
  //{{wide image|file:cool.jpg}}
  let wide = wiki.match(regs.wide_image);
  if (wide) {
    templates.wide_image = wide[1].split('|');
    wiki = wiki.replace(regs.wide_image, '');
  }
  if (Object.keys(templates).length > 0) {
    r.templates = templates;
  }
  return wiki;
};
module.exports = parseTemplates;
