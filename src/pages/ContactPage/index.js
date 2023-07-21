import Layout from "../../Layout";
import "./style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Contact() {
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [btnsubmit, setBtnsubmit] = useState(false);
  const [hasCalledApi, setHasCalledApi] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const address1 = document.getElementById("address1").value;
    const address2 = document.getElementById("address2").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Kiểm tra tính hợp lệ của các giá trị
    // if (name.trim() === "") {
    //   var a = "お名前を入力してください。"
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: 'お名前を入力してください。'
    //   })
    //   return;
    // }
    // if (address1.trim() === "") {
    //   var b = "ご住所を入力してください。"
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: 'ご住所を入力してください。'
    //   })
    //   return;
    // }
    // const address = /^\d{7}$/;
    // if (!address.test(address1)) {
    //   var c = "市外局番の文字を入力してください。"
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: '市外局番の文字を入力してください。'
    //   })
    //   return;
    // }

    // if (email.trim() === "") {
    //   var d = "電話番号を入力してください"
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: '電話番号を入力してください。'
    //   })
    //   return;
    // }
    // if (phone.trim() === "") {
    //   var e = "電話番号を入力してください。"
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: '電話番号を入力してください。'
    //   })
    //   return;
    // }
    // if (message.trim() === "") {
    //   var f = "お問合わせ内容を入力してください。"
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: 'お問合わせ内容を入力してください。'
    //   })
    //   return;
    // }

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   var g = "メールアドレスが不正です。"
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: 'メールアドレスが不正です。'
    //   })
    //   return;
    // }

    // const phoneRegex = /^\d{10,11}$/;
    // if (!phoneRegex.test(phone)) {
    //   var h = "電話番号が不正です。"
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: '電話番号が不正です。'
    //   })
    //   return;
    // }

    // const all = a + "\n" + b;
    // console.log("allerrors",all);
    // console.log("bcd");

    let errorMessages = [];

    if (name.trim() === "") {
      errorMessages.push("お名前を入力してください。");
    }

    if (address1.trim() === "") {
      errorMessages.push("ご住所を入力してください。");
    }

    const address = /^\d{7}$/;
    if (!address.test(address1)) {
      errorMessages.push("市外局番の文字を入力してください。");
    }

    if (email.trim() === "") {
      errorMessages.push("電話番号を入力してください。");
    }

    if (phone.trim() === "") {
      errorMessages.push("電話番号を入力してください。");
    }

    if (message.trim() === "") {
      errorMessages.push("お問合わせ内容を入力してください。");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessages.push("メールアドレスが不正です。");
    }

    const phoneRegex = /^\d{10,11}$/;
    if (!phoneRegex.test(phone)) {
      errorMessages.push("電話番号が不正です。");
    }

    if (errorMessages.length > 0) {
      const errorMessage = errorMessages.join("\n");
      console.log("errorMessage", errorMessage);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
      return;
    }

    // http://localhost:5000
    // http://nguyen-thanh-tuan.gattscom.com
    axios
      .post("http://nguyen-thanh-tuan.gattscom.com/api/contact", {
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
    Swal.fire({
      icon: "success",
      title: "Send Mail Success",
      showConfirmButton: false,
      timer: 3000,
    });
    setBtnsubmit(true);
    setName("");
    setAddress1("");
    setAddress2("");
    setPhone("");
    setEmail("");
    setMessage("");
  };
  useEffect(() => {
    if (address1.length >= 7 ) {
      const apiUrl =
        "https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + address1;
      axios.get(apiUrl).then((response) => {
        if (response?.data?.results != null) {
          const zipcode =
            response?.data?.results[0].address1 +
            response?.data?.results[0].address2 +
            response?.data?.results[0].address3;
          setAddress2(zipcode);
        } else {
          setAddress2("");
        }
        // setHasCalledApi(true);
      });
    }
  }, [address1]);

  //  if (address1.length >= 7) {
  //   const apiUrl =
  //     "https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + address1;
  //   axios.get(apiUrl).then((response) => {
  //     if (response?.data?.results != null) {
  //       const zipcode =
  //         response?.data?.results[0].address1 +
  //         response?.data?.results[0].address2 +
  //         response?.data?.results[0].address3;
  //         setAddress2(zipcode);
  //     } else {
  //       setAddress2("");
  //       console.log("abc",setAddress2);
  //     }
  //   });
  // }

  return (
    <Layout id="contact">
      <section className="contact-content">
        <form className="content" onSubmit={onSubmit}>
          <table className="table-contact">
            <tbody>
              <tr>
                <th>
                  <div className="title">
                    <span className="required">必須</span>
                    <span className="label">お名前</span>
                  </div>
                </th>
                <td>
                  <input
                    type="text"
                    id="name"
                    maxLength={40}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="例： 山田　太郎"
                  ></input>
                </td>
              </tr>
              <tr>
                <th>
                  <div className="title">
                    <span className="required">必須</span>
                    <span className="label">ご住所</span>
                  </div>
                </th>
                <td>
                  <input
                    type="text"
                    id="address1"
                    maxLength={8}
                    value={address1}
                    onChange={(event) => setAddress1(event.target.value)}
                    placeholder="〒 166-0002"
                    style={{ width: "33%" }}
                  ></input>
                  <input
                    type="text"
                    id="address2"
                    maxLength={50}
                    value={address2}
                    onChange={(event) => setAddress2(event.target.value)}
                    placeholder="例： 東京都杉並区高円寺北2-13-3"
                    style={{ marginTop: "10px" }}
                  ></input>
                </td>
              </tr>
              <tr>
                <th>
                  <div className="title">
                    <span className="required">必須</span>
                    <span className="label">メールアドレス</span>
                  </div>
                </th>
                <td>
                  <input
                    maxLength={50}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="例： yamada-t@example.com"
                  ></input>
                </td>
              </tr>
              <tr>
                <th>
                  <div className="title">
                    <span className="required">必須</span>
                    <span className="label">電話番号</span>
                  </div>
                </th>
                <td>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    maxLength={11}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="例：09000123456 ※ハイフン（-）不要"
                  ></input>
                </td>
              </tr>
              <tr>
                <th>
                  <div className="title">
                    <span className="required">必須</span>
                    <span className="label">お問合わせ内容</span>
                  </div>
                </th>
                <td>
                  <textarea
                    cols="40"
                    rows="5"
                    id="message"
                    value={message}
                    maxLength={200}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="例：屋根を修理してもらいたいです。"
                    name="contact_mess"
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          {btnsubmit === false ? (
            <button class="submit" type="submit">
              入力した内容を確認する
            </button>
          ) : (
            ""
          )}
        </form>
      </section>
    </Layout>
  );
}
export default Contact;
