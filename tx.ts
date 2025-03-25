const output =  {
  blockTime: 1742816920,
  meta: {
    computeUnitsConsumed: 450,
    err: null,
    fee: 80000,
    innerInstructions: [],
    loadedAddresses: {
      readonly: [],
      writable: [],
    },
    logMessages: [ "Program ComputeBudget111111111111111111111111111111 invoke [1]",
      "Program ComputeBudget111111111111111111111111111111 success", "Program ComputeBudget111111111111111111111111111111 invoke [1]",
      "Program ComputeBudget111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [1]",
      "Program 11111111111111111111111111111111 success"
    ],
    postBalances: [ 68076482, 10000000, 1, 1 ],
    postTokenBalances: [],
    preBalances: [ 78156482, 0, 1, 1 ],
    preTokenBalances: [],
    rewards: [],
    status: {
      Ok: null,
    },
  },
  slot: 369506226,
  transaction: {
    message: Message {
      header: [Object ...],
      accountKeys: [
        [PublicKey(GwfmPZdHfRfnkhPd1ppNYdVvdQe2QxyiZZHGNFKzZB2) ...], [PublicKey(5u2zs1S8R9z3sfMp5XiaXqtZZmMadLCULyBrVLz5RTvo) ...], [PublicKey(11111111111111111111111111111111) ...], [PublicKey(ComputeBudget111111111111111111111111111111) ...]
      ],
      recentBlockhash: "8uARijT9vMYf1syg7ScHzHpWgX1bSerjAQx3yiwq76oC",
      instructions: [
        [Object ...], [Object ...], [Object ...]
      ],
      indexToProgramIds: Map(2) {
        3: [PublicKey(ComputeBudget111111111111111111111111111111) ...],
        2: [PublicKey(11111111111111111111111111111111) ...],
      },
      version: [Getter],
      staticAccountKeys: [Getter],
      compiledInstructions: [Getter],
      addressTableLookups: [Getter],
      getAccountKeys: [Function: getAccountKeys],
      isAccountSigner: [Function: isAccountSigner],
      isAccountWritable: [Function: isAccountWritable],
      isProgramId: [Function: isProgramId],
      programIds: [Function: programIds],
      nonProgramIds: [Function: nonProgramIds],
      serialize: [Function: serialize],
    },
    signatures: [ "5uUvxLh3GTSV4cay8N76Y7yTRuCtNBL3WtVSp4Ujw2GzK44ZMda1hiYijGknGVqeiKZQLwzP24yGECn3Ad5xD3Lc" ],
  },
};