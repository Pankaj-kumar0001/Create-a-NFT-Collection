/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Step 1: Create a variable to hold your NFT's
let nftCollection = [];
let totalNFTsMinted = 0;

// Step 2: Create a function that will mint an NFT
function mintNFT(tokenName, tokenDescription, tokenImage) {
  const nft = {
    name: tokenName,
    description: tokenDescription,
    image: tokenImage
  };
  nftCollection.push(nft);
  totalNFTsMinted++;
}

// Step 3: Create a function that will list all NFTs
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    const nft = nftCollection[i];
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Image: " + nft.image);
    console.log("------------------");
  }
}

// Step 4: Create a function that will return the total supply of NFTs
function getTotalSupply() {
  console.log("Total Supply: " + totalNFTsMinted);
}

// Call your functions below this line
mintNFT("NFT 1", "First NFT", "image1.jpg");
mintNFT("NFT 2", "Second NFT", "image2.jpg");

listNFTs();
getTotalSupply();
