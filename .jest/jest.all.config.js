const buildConfig = require("./jest.utils").buildConfig;

module.exports = buildConfig(["unit", "integration", "storySnapshots"]);
