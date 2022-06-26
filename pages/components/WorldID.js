worldID.init("world-id-container", {
      enable_telemetry: true,
      action_id: "wid_feb8ec8c9cb6cc47d7f9195e0b354043",
      signal: "yourSignal"// <- Set an appropriate signal for each user
    });

document.addEventListener("DOMContentLoaded", async function() {
    try{
        const result = await worldID.enable(); // <- Send 'result' to your backend or smart contract
    console.log("World ID verified successfully!");
    } catch(failure) {
    console.warn("World ID verification failed:", failure);
    // Re-activate here so your end user can try again
  }
});

POST https://developer.worldcoin.org/api/v1/verify

{  
    "Content-Type": "application/json" 
}

{
    "action_id": "wid_feb8ec8c9cb6cc47d7f9195e0b354043",   
    "signal": "<your_signal>",
    "proof": "<as_received_from_the_widget>",
    "nullifier_hash": "<as_received_from_the_widget>",
    "merkle_root": "<as_received_from_the_widget>"
}

{
    "success": true,  
    "nullifier_hash": "nil_c94ee7a8954a4f18effc179cfd76b992",
    "created_at": "2022-06-22T11:23:23.931Z"
}