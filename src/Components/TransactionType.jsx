import { Button } from "antd";
import React from "react";

const TransactionType = ({ handlePageChange }) => {
  return (
    <>
      <Button
        className="OptionButton"
        onClick={() =>
          handlePageChange("InputFieldEnterAmount", "success", "withdrawal")
        }
      >
        Withdrawal
      </Button>
      <Button
        className="OptionButton"
        onClick={() => handlePageChange("Denominationd", "success", "deposit")}
      >
        Deposit
      </Button>
      <Button
        className="OptionButton"
        onClick={() =>
          handlePageChange("InputFieldEnterPin", "success", "inquiry")
        }
      >
        Balance Inquiry
      </Button>
      <Button
        className="OptionButton"
        onClick={() =>
          handlePageChange("InputFieldEnterAccNo", "success", "Fund Transfer")
        }
      >
        Fund Transfer
      </Button>
    </>
  );
};

export default TransactionType;
