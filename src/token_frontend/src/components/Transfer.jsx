import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token_backend } from "../../../declarations/token_backend/index";

function Transfer() {

  const [transferToId, setId] = useState(""); 
  const [transferAmount, setAmount] = useState("");
  const [Disabled, setDisabled] = useState(false);
  
  async function handleClick() {
    const principalId = Principal.fromText(transferToId);
    const amountToTransfer = Number(transferAmount);
    setDisabled(true);
    await token_backend.transfer(principalId, amountToTransfer);
    setDisabled(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={transferToId}
                onChange={(e)=>{setId(e.target.value)}}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={transferAmount}
                onChange={(e)=>{setAmount(e.target.value)}}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={Disabled}>
            Transfer
          </button>
        </p>
      </div>
    </div>
  );
}

export default Transfer;
