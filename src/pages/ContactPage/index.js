import Layout from "../../Layout";
import "./style.css";
import React, { useState } from "react";
import axios from "axios";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("/contactform", {
        name,
        email,
        message,
      });
      console.log('name' + name);

      alert("Thank you for your message!");
    } catch (error) {
      console.log(error);
      alert("Sorry, there was an error sending your message.");
    }
  };

  return (
    <Layout id="contact" >
      <form onSubmit={handleSubmit}>
      <div className="content">
        <div className="content__table">
          <div
            className="content__table__row"
            style={{ "border-top": "1px solid #ccc" }}
          >
            <div className="col-3 title__container">
              <span>必須</span>
              <h4>お名前 </h4>
            </div>
            <div className="input__container">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="例： 山田　太郎"
              ></input>
            </div>
          </div>
          <div className="content__table__row">
            <div className="col-3 title__container" style={{ height: "150px" }}>
              <span>必須</span>
              <h4>ご住所 </h4>
            </div>
            <div
              className="input__container"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <input placeholder="〒 166-0002" style={{ width: "40%" }}></input>
              <input
                placeholder="例： 東京都杉並区高円寺北2-13-3"
                style={{ marginTop: "10px" }}
              ></input>
            </div>
          </div>
          <div className="content__table__row">
            <div className="col-3 title__container">
              <span>必須</span>
              <h4>メールアドレス </h4>
            </div>
            <div className="input__container">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="例： yamada-t@example.com"
              ></input>
            </div>
          </div>
          <div className="content__table__row">
            <div className="col-3 title__container">
              <span>必須</span>
              <h4>電話番号 </h4>
            </div>
            <div className="input__container">
              <input placeholder="例：09000123456 ※ハイフン（-）不要"></input>
            </div>
          </div>
          <div className="content__table__row">
            <div className="col-3 title__container" style={{ height: "90px" }}>
              <span>必須</span>
              <h4>お問合わせ内容 </h4>
            </div>
            <div className="input__container">
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="例：屋根を修理してもらいたいです。"
              ></textarea>
            </div>
          </div>
        </div>
        <button className="btn--submit" type="submit">
          入力した内容を確認する
        </button>
      </div>
      </form>
    </Layout>
  );

  
  
    // return (
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="name">Name:</label>
    //       <input
    //         type="text"
    //         id="name"
    //         value={name}
    //         onChange={(event) => setName(event.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         type="email"
    //         id="email"
    //         value={email}
    //         onChange={(event) => setEmail(event.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="message">Message:</label>
    //       <textarea
    //         id="message"
    //         value={message}
    //         onChange={(event) => setMessage(event.target.value)}
    //       />
    //     </div>
    //     <button type="submit">Send</button>
    //   </form>
    // );
  };

export default Contact;
