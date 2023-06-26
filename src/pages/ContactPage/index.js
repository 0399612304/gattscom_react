import Layout from "../../Layout";
import "./style.css";
import React, { useState } from "react";
import axios from "axios";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// const schema = yup
//   .object()
//   .shape({
//     Name: yup.string().required("Name is required"),
//     Gmail: yup
//       .string()
//       .required("New Password is required")
//       .min(8, "Password min is 8 , max is 16 .")
//       .max(16, "Password min is 8 , max is 16 ."),
//     confirmPassword: yup
//       .string()
//       .oneOf([yup.ref("Password"), null], "Passwords must match")
//       .required("Confirm Password is required")
//       .min(8, "Password min is 8 , max is 16 .")
//       .max(16, "Password min is 8 , max is 16 ."),
//   })
//   .required();

function Contact() {
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("", event.target.value);
    axios
      .post("http://localhost:5000/api/contact", {
        name: name,
        address1: address1,
        address2: address2,
        email: email,
        phone: phone,
        message: message,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Layout id="contact">
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <form onSubmit={onSubmit}>
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
                  // {...register("Name")}
                ></input>
                {/* <p className="Text-red">{errors.Name?.message}</p> */}
              </div>  
            </div>
            <div className="content__table__row">
              <div
                className="col-3 title__container"
                style={{ height: "150px" }}
              >
                <span>必須</span>
                <h4>ご住所 </h4>
              </div>
              <div
                className="input__container"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <input
                  type="text"
                  id="address1"
                  value={address1}
                  onChange={(event) => setAddress1(event.target.value)}
                  placeholder="〒 166-0002"
                  style={{ width: "40%" }}
                ></input>
                <input
                  type="text"
                  id="address2"
                  value={address2}
                  onChange={(event) => setAddress2(event.target.value)}
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
                <input
                  type="number"
                  id="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="例：09000123456 ※ハイフン（-）不要"
                ></input>
              </div>
            </div>
            <div className="content__table__row">
              <div
                className="col-3 title__container"
                style={{ height: "90px" }}
              >
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
}
export default Contact;
