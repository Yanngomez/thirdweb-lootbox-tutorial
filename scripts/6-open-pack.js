import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0xcb0AF93A89fE56F5769A66a2c6Ce39459B2C7a0F';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}