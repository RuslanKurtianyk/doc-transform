const { addAliases } = require("module-alias");

const aliases = {
  "@": `${__dirname}/src`,
};

addAliases(aliases);