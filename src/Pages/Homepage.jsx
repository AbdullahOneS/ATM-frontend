import React, { useEffect, useState } from "react";
import "../styles.css";
import Keys from "../Components/Keys";
import Welcome from "../Components/Welcome";
import InsertCard from "./InsertCard";
import Options from "./Options";
import Denomination from "./Denomination";
import InputField from "./InputField";
import Error from "../Components/Error";
import Receipt from "../Components/Receipt";
import Keyboard from "../Components/Keyboard";
import Api from "../Api";
import Denominationdepo from "./Denominationdepo";

const Homepage = () => {
  const getCurrentDate = () => {
    const now = new Date();

    // Get day, month, year, hours, and minutes
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    // Combine the parts to form the desired format
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;

    return formattedDate;
  };

  //current
  const [currentPage, setCurrentPage] = useState("");
  //withdrawal data
  const [withdrawalAmt, setWithdrawalAmt] = useState(0);
  const [denominations, setDenominations] = useState({
    n_100: 0,
    n_200: 0,
    n_500: 0,
    n_2000: 0,
  });
  const [cardNo, setCardNo] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const [cardHolder, setCardHolder] = useState("");

  const [DepositAmount, setDepositAmount] = useState(0);
  const [depoDenominations, setDepoDenominations] = useState({
    n_100: 0,
    n_200: 0,
    n_500: 0,
    n_2000: 0,
  });

  useEffect(() => {
    setDepoDenominations({
      n_100: 0,
      n_200: 0,
      n_500: 0,
      n_2000: 0,
    });
  }, []);

  const [receiverAccountHolderName, setReceiverAccountHolderName] =
    useState("");

  // console.log(denominations);

  const [pages, setPages] = useState({
    Welcome: true,
    InsertCard: false,
    OptionsAT: false,
    OptionsTT: false,
    Denominationw: false,
    Denominationd: false,
    InputFieldTTtransfer: false,
    InputFieldEnterAmount: false,
    InputFieldEnterPin: false,
    InputFieldEnterPin: false,
    InputFieldEnterOTP: false,
    InputFieldEnterAccNo: false,
    Error: false,
    Receipt: false,
    // ReceiptFndT: false,
    // ReceiptDep: false,
    // ReceiptW: false,
  });

  const [screenOutput, setScreenOutput] = useState("");
  const [data, setData] = useState({
    cardHolder: "",
    date: "",
    transactionID: "",
    cardNo: "",
    transactiontype: "",
    ReceiverAccountHolder: "",
    amount: "",
    status: "pending",
    balance: "",
    cardAccountType: "",
  });
  const [atmDenominations, setAtmDenominations] = useState({});

  const handlePageChange = (pageKey, message, type) => {
    // if (message == "success") {
    if (type) {
      setData((prev) => ({
        ...prev,
        transactiontype: type,
      }));
    }
    // }
    // setData(cardDetails);
    setScreenOutput("");
    setErrorMsg(message);
    setCurrentPage(pageKey);
    setPages((prevPages) => {
      const updatedPages = { ...prevPages };
      for (const key in updatedPages) {
        updatedPages[key] = key === pageKey;
      }
      return updatedPages;
    });
    // console.log(data);
  };

  const cardVerify = async () => {
    try {
      var result = await Api.post("card/verify", {
        card_no: screenOutput,
      });
      if (result.data.status == 200) {
        handlePageChange("OptionsAT");
        setData({
          cardHolder: result.data.data.name,
          date: "",
          transactionID: "",
          cardNo: screenOutput,
          transactiontype: "",
          ReceiverAccountHolder: "",
          amount: "",
          status: "pending",
          balance: "",
          cardAccountType: result.data.data.type,
        });
        setCardNo(screenOutput);
        setCardHolder(result.data.data.name);
      } else {
        handlePageChange("Error", result.data.message);
      }

      // console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const depositAmount = async () => {
    // console.log("helo");
    // console.log(data);
    try {
      const result = await Api.post("deposit/add", {
        card_no: data.cardNo,
        pin: screenOutput,
        denomination: depoDenominations,
        atm_id: 1,
      });
      console.log(result.data);
      if (result.data.status === 200) {
        // console.log(result.data.data.transaction_id);
        setData((prev) => ({
          ...prev,
          date: getCurrentDate(),
          transactionID: result.data.data.transaction_id,
          cardNo: "XXXX XXXX XXXX " + result.data.data.card_no.slice(12, 16),
          amount: DepositAmount,
          status: result.data.data.transaction_status,
          // balance: result.data.data.balance,
        }));
      } else {
        setData((prev) => ({
          ...prev,
          date: getCurrentDate(),
          // transactionID: result.data.data.transaction_id,
          cardNo: "XXXX XXXX XXXX " + data.cardNo.slice(12, 16),
          amount: data.amount,
          status: result.data.message,
        }));
      }
      handlePageChange("Receipt");
    } catch (error) {
      console.error(error);
    }
  };

  const balanceCheck = async () => {
    // console.log("i m balance check");
    try {
      var result = await Api.post("balance/check", {
        card_no: cardNo,
        pin: screenOutput,
      });
      if (result.data.status == 200) {
        // console.log("here");
        // setType("inquiry");
        setCardNo(result.data.data.card_no);
        setData((prev) => ({
          ...prev,
          cardNo: "XXXX XXXX XXXX " + cardNo.slice(12, 16),
          balance: result.data.data.balance,
          cardHolder: result.data.data.name,
          status: "passed",
          date: getCurrentDate(),
        }));
        handlePageChange("Receipt");
      } else {
        handlePageChange("Error", result.data.message);
      }

      // console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const AmountCheck = async () => {
    console.log("i m amt check");
    try {
      var result = await Api.post("withdrawal/denomination", {
        atm_id: 1,
      });
      if (result.data.status === 200) {
        setAtmDenominations(result.data.data);
        // console.log(result.data.data);
        //find which is lowest denomination in atm
        // console.log(atmDenominations);
        let min_note = 100;
        if (atmDenominations.n_100 > 0) {
          min_note = 100;
        } else if (atmDenominations.n_200 > 0) {
          min_note = 200;
        } else if (atmDenominations.n_500 > 0) {
          min_note = 500;
        } else if (atmDenominations.n_2000 > 0) {
          min_note = 2000;
        } else {
          // handlePageChange("Error", "No Cash to Dispence");
        }
        let totalAtmAmt =
          atmDenominations.n_100 * 100 +
          atmDenominations.n_200 * 200 +
          atmDenominations.n_500 * 500 +
          atmDenominations.n_2000 * 2000;
        // console.log(atmDenominations);
        if (totalAtmAmt > screenOutput && screenOutput % min_note === 0) {
          setData((prev) => ({
            ...prev,
            amount: screenOutput,
          }));
          console.log(min_note);

          handlePageChange("Denominationw");
        } else {
          handlePageChange("Error", "No Cash to Dispence");
        }
      } else {
        handlePageChange("Error", result.message);
      }
    } catch (error) {
      console.error();
    }
  };

  const Withdrawal = async () => {
    try {
      var result = await Api.post("withdrawal", {
        atm_id: 1,
        amount: data.amount,
        denominations: denominations,
        card_no: data.cardNo,
        pin: screenOutput,
      });
      console.log(result.data.status === 200);
      if (result.data.status === 200) {
        console.log(result.data.data.transaction_id);
        setData((prev) => ({
          ...prev,
          date: getCurrentDate(),
          transactionID: result.data.data.transaction_id,
          cardNo: "XXXX XXXX XXXX " + result.data.data.card_no.slice(12, 16),
          amount: result.data.data.amount,
          status: result.data.data.transaction_status,
          balance: result.data.data.balance,
        }));
      } else {
        setData((prev) => ({
          ...prev,
          date: getCurrentDate(),
          // transactionID: result.data.data.transaction_id,
          cardNo: "XXXX XXXX XXXX " + data.cardNo.slice(12, 16),
          amount: data.amount,
          status: result.data.message,
        }));
      }
      handlePageChange("Receipt");
    } catch (error) {
      console.error();
    }
  };

  const transferAmt = async () => {
    // console.log("hellllllllllllll0");
    try {
      var result = await Api.post("fundTransfer", {
        atm_id: 1,
        amount: data.amount,
        receiver_acc_no: data.ReceiverAccountHolder,
        card_no: data.cardNo,
        pin: screenOutput,
      });
      // console.log(result.data);
      let status = result.data.status === 200 ? "Successful" : result.message;
      setData((prev) => ({
        date: getCurrentDate(),
        transactionID: "ID",
        transactiontype: data.transactiontype,
        amount: data.amount,
        status: status,
        balance: 100,
      }));

      handlePageChange("Receipt");
    } catch (error) {
      console.error();
    }
  };

  const setTranferAmt = () => {
    setData((prev) => ({
      ...prev,
      amount: screenOutput,
    }));
    handlePageChange("InputFieldEnterPin");
  };
  const handleKeyClick = (key) => {
    // Handle the key press and update the screen output based on the key and input type

    if (
      key === "1" ||
      key === "2" ||
      key === "3" ||
      key === "4" ||
      key === "5" ||
      key === "5" ||
      key === "6" ||
      key === "7" ||
      key === "8" ||
      key === "9" ||
      key === "0"
    ) {
      if (currentPage === "InsertCard") {
        if (screenOutput.length < 16) {
          setScreenOutput((prev) => prev + key);
        }
      } else if (currentPage === "InputFieldEnterPin") {
        // console.log("hii");
        if (screenOutput.length < 4) {
          setScreenOutput((prev) => prev + key);
        }
      } else if (currentPage === "InputFieldEnterAmount") {
        setScreenOutput((prev) => prev + key);
      } else if (currentPage === "InputFieldEnterAccNo") {
        if (screenOutput.length < 14) {
          setScreenOutput((prev) => prev + key);
        }
      } else if (currentPage === "InputFieldTTtransfer") {
        setScreenOutput((prev) => prev + key);
      }
    } else if (key === "CLEAR") {
      setScreenOutput("");
    } else if (key === "CANCEL") {
      setData({
        cardHolder: "",
        date: "",
        transactionID: "",
        cardNo: "",
        transactiontype: "",
        ReceiverAccountHolder: "",
        amount: "",
        status: "pending",
        balance: "",
        cardAccountType: "",
      });
      handlePageChange("Welcome");
    } else if (key === "DELETE") {
      let temp = screenOutput.slice(0, screenOutput.length - 1);

      // console.log(temp);

      setScreenOutput(temp);
    } else {
      // console.log("hii");

      if (currentPage == "Welcome") {
        setData({
          cardHolder: "",
          date: "",
          transactionID: "",
          cardNo: "",
          transactiontype: "",
          ReceiverAccountHolder: "",
          amount: "",
          status: "pending",
          balance: "",
          cardAccountType: "",
        });
        handlePageChange("InsertCard");
      } else if (currentPage === "InsertCard") {
        if (screenOutput.length === 16) {
          cardVerify();
        }
      } else if (
        currentPage === "InputFieldEnterPin" &&
        data.transactiontype === "withdrawal"
      ) {
        //// yet to sort
        if (screenOutput.length === 4) {
          Withdrawal();
        }
      } else if (
        currentPage === "InputFieldEnterPin" &&
        data.transactiontype === "inquiry"
      ) {
        if (screenOutput.length === 4) {
          balanceCheck();
        }
      } else if (currentPage === "InputFieldEnterAmount") {
        //function to called
        AmountCheck();
      } else if (currentPage === "InputFieldEnterAccNo") {
        if (screenOutput.length === 14) {
          // handlePageChange("InputFieldTTtransfer");
          CheckReceiverAcc();
        }
      } else if (currentPage === "InputFieldTTtransfer") {
        setTranferAmt();
      } else if (
        currentPage === "InputFieldEnterPin" &&
        data.transactiontype === "Fund Transfer"
      ) {
        if (screenOutput.length === 4) {
          transferAmt();
        }
      } else if (
        currentPage === "InputFieldEnterPin" &&
        data.transactiontype === "deposit"
      ) {
        if (screenOutput.length === 4) {
          depositAmount();
        }
      }
    }
  };

  const CheckReceiverAcc = async () => {
    console.log("I m Receiver Account check");
    try {
      var result = await Api.post("fundTransfer/acc_name", {
        receiver_acc_no: screenOutput,
      });
      // console.log(result.data.status);
      if (result.data.status === 200) {
        setReceiverAccountHolderName(result.data.data);
        setData((prev) => ({
          ...prev,
          ReceiverAccountHolder: screenOutput, //here it will have receiver account holder name
        }));
        handlePageChange("InputFieldTTtransfer");
      }
    } catch (error) {
      console.error(error);
    }
    //existing account or not
    //considering acount exist
  };

  return (
    <>
      {/* {currentPage} */}
      <div className="home">
        <div id="output-screen">
          {/* {data.transactiontype} */}
          {/* {currentComponent === "" ? (
            <Welcome handleChange={handleChange} />
          ) : (
            currentComponent
          )} */}
          {/* {currentPage}
          {screenOutput} */}
          {/* {data.transactiontype} */}
          {pages.Welcome ? <Welcome handlePageChange={handlePageChange} /> : ""}
          {pages.InsertCard ? (
            <InsertCard
              title="Card number"
              handlePageChange={handlePageChange}
              cardNumber={screenOutput}
              cardVerify={cardVerify}
            />
          ) : (
            ""
          )}
          {pages.OptionsAT ? (
            <Options
              Type="Accounttype"
              handlePageChange={handlePageChange}
              accType={data.cardAccountType}
              cardNo={data.cardNo}
              cardHolder={data.cardHolder}
            />
          ) : (
            ""
          )}
          {pages.OptionsTT ? (
            <Options
              Type="Transactiontype"
              handlePageChange={handlePageChange}
              cardNo={data.cardNo}
              cardHolder={data.cardHolder}
            />
          ) : (
            ""
          )}

          {pages.Denominationw ? (
            <Denomination
              amount="2000"
              page="withdrawal"
              handlePageChange={handlePageChange}
              setDenominations={setDenominations}
              withdrawalAmt={data.amount}
              atmDenominations={atmDenominations}
            />
          ) : (
            ""
          )}
          {pages.Denominationd ? (
            <Denominationdepo
              amount="2000"
              page="deposit"
              handlePageChange={handlePageChange}
              DepositAmount={DepositAmount}
              setDepositAmount={setDepositAmount}
              depoDenominations={depoDenominations}
              setDepoDenominations={setDepoDenominations}
            />
          ) : (
            ""
          )}
          {pages.InputFieldTTtransfer ? (
            <InputField
              message="Enter Amount"
              transactionType="transfer"
              handlePageChange={handlePageChange}
              ReceiverAccountHolder={receiverAccountHolderName} //send name of receiver
              Amount={screenOutput}
              setTranferAmt={setTranferAmt}
            />
          ) : (
            ""
          )}
          {pages.InputFieldEnterAmount ? (
            <InputField
              message="Enter Amount"
              handlePageChange={handlePageChange}
              Amount={screenOutput}
              // setWithdrawalAmt={setWithdrawalAmt}
              AmountCheck={AmountCheck}
            />
          ) : (
            ""
          )}
          {pages.InputFieldEnterPin ? (
            <InputField
              message="Enter Pin"
              handlePageChange={handlePageChange}
              pin={screenOutput}
              balanceCheck={balanceCheck}
              Withdrawal={Withdrawal}
              transactionType={data.transactiontype}
              transferAmt={transferAmt}
              depositAmount={depositAmount}
            />
          ) : (
            ""
          )}
          {pages.InputFieldEnterOTP ? (
            <InputField
              message="Enter OTP"
              handlePageChange={handlePageChange}
            />
          ) : (
            ""
          )}
          {pages.InputFieldEnterAccNo ? (
            <InputField
              message="Enter Account Number"
              handlePageChange={handlePageChange}
              accountNo={screenOutput}
              CheckReceiverAcc={CheckReceiverAcc}
            />
          ) : (
            ""
          )}
          {pages.Error ? (
            <Error message={errormsg} handlePageChange={handlePageChange} />
          ) : (
            ""
          )}
          {/* {pages.Receipt?<Receipt />:''} */}
          {pages.Receipt ? (
            <Receipt
              cardHolderName={data.cardHolder}
              Date={data.date}
              transactionID={data.transactionID}
              CardNo={data.cardNo}
              type={data.transactiontype}
              amount={data.amount}
              ReceiverAccountHolder={data.ReceiverAccountHolder}
              status={data.status}
              balance={data.balance}
              handlePageChange={handlePageChange}
              // handleData={handleData}
            />
          ) : (
            ""
          )}

          {/* {pages.ReceiptFndT ? (
            <Receipt
              cardHolderName="Aayushi Amonkar"
              Date="03/08/2023 11:00"
              transactionID="1234"
              CardNo="XXXX XXXX XXXX 5678"
              type="Fund Transfer"
              ReceiverAccountHolder="Rasik Raikar"
              amount={100.0}
              status="passed"
              balance={5000.0}
              handlePageChange={handlePageChange}
            />
          ) : (
            ""
          )} */}

          {/* {pages.ReceiptDep ? (
            <Receipt
              cardHolderName="Aayushi Amonkar"
              Date="03/08/2023 11:00"
              transactionID="1234"
              CardNo="XXXX XXXX XXXX 5678"
              type="Deposit"
              amount={100.0}
              status="passed"
              balance={5000.0}
              handlePageChange={handlePageChange}
            />
          ) : (
            ""
          )} */}

          {/* {pages.ReceiptW ? (
            <Receipt
              cardHolderName="Aayushi Amonkar"
              Date="03/08/2023 11:00"
              transactionID="1234"
              CardNo="XXXX XXXX XXXX 5678"
              type="Withdrawal"
              amount={100.0}
              status="passed"
              balance={5000.0}
              handlePageChange={handlePageChange}
            />
          ) : (
            ""
          )} */}
        </div>
        <Keyboard onKeyClick={handleKeyClick} />
      </div>
    </>
  );
};

export default Homepage;
