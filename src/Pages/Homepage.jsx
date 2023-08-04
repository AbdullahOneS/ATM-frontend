import React, { useState } from "react";
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
const Homepage = () => {
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
  const [message, setMessage] = useState("");
  // ----

  const [cardHolder, setCardHolder] = useState("");

  const [accType, setacctype] = useState("");

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
    InputFieldEnterOTP: false,
    InputFieldEnterAccNo: false,
    Error: false,
    ReceiptInq: false,
    ReceiptFndT: false,
    ReceiptDep: false,
    ReceiptW: false,
  });

  const [screenOutput, setScreenOutput] = useState("");
  const [data, setData] = useState({});
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
      }
    } else if (key === "CLEAR") {
      setScreenOutput("");
    } else if (key === "CANCEL") {
      handlePageChange("Welcome");
    } else if (key === "DELETE") {
      let temp = screenOutput.slice(0, screenOutput.length - 1);

      // console.log(temp);

      setScreenOutput(temp);
    } else {
      // console.log("hii");

      if (currentPage == "Welcome") {
        handlePageChange("InsertCard");
      } else if (currentPage === "InsertCard") {
        if (screenOutput.length === 16) {
          handlePageChange("OptionsAT");
        }
      }
    }
  };

  console.log(data);
  // const acccountType = (acct)=>{
  //   setacctype(acct);
  // }

  // console.log(accType);

  // const handleWelcome = (currentPage)=>{
  //   setPages((pre)=>({
  //     ...pre,
  //     Welcome:true,
  //     currentPage:false
  //   }))
  // }
  // const handleInsertCard = (currentPage)=>{
  //   setPages((pre)=>({
  //     ...pre,
  //     Welcome:false,
  //     InsertCard:true,
  //     OptionsAT:false,
  //     OptionsTT:false,
  //     DenominationW:false,
  //     DenominationD:false,
  //     InputFieldTTtransfer:false,
  //     InputFieldEnterAmount:false,
  //     InputFieldEnterPin:false,
  //     InputFieldEnterOTP:false,
  //     InputFieldEnterAccNo:false,
  //     Error:false,
  //     Receipt:false
  //   }))
  // }
  // const handleOptionsAccountType = (currentPage)=>{
  //   setPages((pre)=>({
  //     ...pre,
  //     OptionsAT:true,
  //     currentPage:false
  //   }))
  // }

  const handlePageChange = (pageKey, cardDetails) => {
    setData(cardDetails);
    setScreenOutput("");
    setCurrentPage(pageKey);
    setPages((prevPages) => {
      const updatedPages = { ...prevPages };
      for (const key in updatedPages) {
        updatedPages[key] = key === pageKey;
      }
      return updatedPages;
    });
  };

  return (
    <>
      <div className="home">
        <div id="output-screen">
          {/* {currentComponent === "" ? (
            <Welcome handleChange={handleChange} />
          ) : (
            currentComponent
          )} */}
          {pages.Welcome ? <Welcome handlePageChange={handlePageChange} /> : ""}
          {pages.InsertCard ? (
            <InsertCard
              title="Card number"
              handlePageChange={handlePageChange}
              // setCardNo={setCardNo}
              // setCardHolder={setCardHolder}
              // cardHolder={cardHolder}
              cardNumber={screenOutput}
            />
          ) : (
            ""
          )}
          {pages.OptionsAT ? (
            <Options
              Type="Accounttype"
              handlePageChange={handlePageChange}
              accType={data.cardAccountType}
              cardNo={data.cardNumber}
              cardHolder={data.cardHolder}
            />
          ) : (
            ""
          )}
          {pages.OptionsTT ? (
            <Options
              Type="Transactiontype"
              handlePageChange={handlePageChange}
              cardNo={data.cardNumber}
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
              withdrawalAmt={withdrawalAmt}
            />
          ) : (
            ""
          )}
          {pages.Denominationd ? (
            <Denomination
              amount="2000"
              page="deposit"
              handlePageChange={handlePageChange}
            />
          ) : (
            ""
          )}
          {pages.InputFieldTTtransfer ? (
            <InputField
              message="Enter Amount"
              Transactiontype="transfer"
              handlePageChange={handlePageChange}
            />
          ) : (
            ""
          )}
          {pages.InputFieldEnterAmount ? (
            <InputField
              message="Enter Amount"
              handlePageChange={handlePageChange}
              setWithdrawalAmt={setWithdrawalAmt}
            />
          ) : (
            ""
          )}
          {pages.InputFieldEnterPin ? (
            <InputField
              message="Enter Pin"
              handlePageChange={handlePageChange}
              withdrawalAmt={withdrawalAmt}
              denominations={denominations}
              cardNo={cardNo}
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
            />
          ) : (
            ""
          )}
          {pages.Error ? (
            <Error
              message={"Invalid Card Number"}
              handlePageChange={handlePageChange}
            />
          ) : (
            ""
          )}
          {/* {pages.Receipt?<Receipt />:''} */}
          {pages.ReceiptInq ? (
            <Receipt
              cardHolderName="Aayushi Amonkar"
              Date="03/08/2023 11:00"
              CardNo="XXXX XXXX XXXX 5678"
              type="inquiry"
              amount={100.0}
              status="passed"
              balance={5000.0}
              handlePageChange={handlePageChange}
            />
          ) : (
            ""
          )}

          {pages.ReceiptFndT ? (
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
          )}

          {pages.ReceiptDep ? (
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
          )}

          {pages.ReceiptW ? (
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
          )}
        </div>
        <Keyboard onKeyClick={handleKeyClick} />
        {/* <div id="keypad">
          <div>
            <div className="keypad-row">
              <Keys num={"1"} />
              <Keys num={"2"} />
              <Keys num={"3"} marginright={"6%"} />
              <Keys
                num={"CANCEL"}
                colour={"#D5193C"}
                size={"small"}
                width={"85px"}
              />
            </div>
            <div className="keypad-row">
              <Keys num={"4"} />
              <Keys num={"5"} />
              <Keys num={"6"} marginright={"6%"} />
              <Keys
                num={"CLEAR"}
                colour={"#FFE484"}
                size={"small"}
                width={"85px"}
              />
            </div>
            <div className="keypad-row">
              <Keys num={"7"} />
              <Keys num={"8"} />
              <Keys num={"9"} marginright={"6%"} />
              <Keys
                num={"ENTER"}
                colour={"#008229"}
                size={"small"}
                width={"85px"}
              />
            </div>
            <div className="keypad-row">
              <Keys num={" "} />
              <Keys num={"0"} />
              <Keys num={"."} marginright={"6%"} />
              <Keys num={""} size={"small"} width={"85px"} />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Homepage;
