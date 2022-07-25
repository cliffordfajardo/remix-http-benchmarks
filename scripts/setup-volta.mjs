import 'zx/globals';
const Shell = $;

console.log(`\n-----------------Running: check-volta-cli.sh---------------------"`);
console.log(`[DEV_SETUP]: 🔎 checking if volta CLI binary is installed on your computer.... (More info: https://volta.sh/)`);

const doesVoltBinaryExist = (await Shell`which volta`).toString().includes('.volta');

if(doesVoltBinaryExist){
  console.log(`[DEV_SETUP]: ✅ 'volta' binary exists on your computer`)
}
else {
  console.log(`[DEV_SETUP]: 🌕 Could not find "volta" binary installed on your computer. Volta is used to automagically install or update node versions for you.`);
  console.log(`[DEV_SETUP]: ⬇️ Downloading volta ....`);
  await Shell`curl https://get.volta.sh | bash;`
  console.log(`[DEV_SETUP]: Finished downloading volta CLI`)
}

console.log(`[DEV_SETUP]: See https://volta.sh/ for more details on volta"`);
console.log(`-----------------Finished: check-volta-cli.sh---------------------\n`);
