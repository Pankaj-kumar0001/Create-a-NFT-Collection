

let nftCollection = [];
let count = 0;

function mintNFT(AccountHolder, AccoutNO, Bankname) {
  const data = {
    AccountHolder: AccountHolder,
    AccoutNO: AccoutNO,
    Bankname: Bankname
  };
  nftCollection.push(data);
  count++;
}
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    const data = nftCollection[i];
    console.log("Accounter_Name: " + data.AccountHolder);
    console.log("Account_Number: " + data.AccoutNO);
    console.log("Bank Name: " + data.Bankname);
    console.log("\n------------------\n");
  }
}

function getTotalSupply() {
  console.log("Total Supply: " + count);
}

mintNFT("Pankaj", "1019170635", "State Bank of India");
mintNFT("Harsh", "1212164512", "Punjab National bank");
mintNFT("Prabhat", "325696845", "Indian Bank ");

listNFTs();
getTotalSupply();
