import React, { useEffect, useState, useRef } from 'react'
import './TaxCard.css'

const TaxCard = (props) => {
  const { index, cardId, taxType, inNum, totTax, mess, disTaxLaws, handleDeleteCard, handleEditCard } = props;

  const [selectedTaxType, setSelectedTaxType] = useState(taxType);
  const [inputNumber, setInputNumber] = useState(inNum);
  const [totalTax, setTotalTax] = useState(totTax);
  const [message, setMessage] = useState(mess);
  const [notification, setNotification] = useState("")
  const [displayNoti, setDisplayNoti] = useState(false);
  const [taxLaws, setTaxLaws] = useState("")
  const [displayTaxLaws, setDisplayTaxLaws] = useState(disTaxLaws)

  const timeoutRef = useRef(null);

  const handleSelectChange = (e) => {
    setSelectedTaxType(e.target.value);
  }

  useEffect(() => {
    if (selectedTaxType === "Kinh doanh Online") {
      //Kinh doanh Online
      setTaxLaws(
        <div>
          <hr />
          <div className='tax-laws-header'>
            Luật thuế - Kinh doanh Online
            <button className='tax-law-button' onClick={handleTaxLawsBox}>{displayTaxLaws ? "Ẩn" : "Hiện"}</button>
          </div>
          {
            displayTaxLaws
              ?
              <ul>
                <li>Trường hợp 1:
                  <ul>
                    <li>Dưới 100tr VND trong năm dương lịch</li>
                    <li>Thuế GTGT: KHÔNG NỘP</li>
                    <li>Thuế TNCN: KHÔNG NỘP</li>
                  </ul>
                </li>
                <li>Trường hợp 2:
                  <ul>
                    <li>Trên 100tr VND trong năm dương lịch</li>
                    <li>Thuế GTGT: 1% doanh thu</li>
                    <li>Thuế TNCN: 0.5% doanh thu</li>
                  </ul>
                </li>
                <li>Hướng dẫn
                  <ul>
                    <li>Khi bắt đầu kinh doanh phải đăng ký hộ kinh doanh, cá nhân kinh doanh</li>
                    <li>Nếu là doanh nghiệp thì phần này không áp dụng</li>
                    <li>Khi đủ 100tr VND phải khai thuế trong tháng tiếp theo. Ví dụ: tổng doanh thu tới tháng 9 là 101tr VND thì phải đi khai và nộp thuế trong tháng 10</li>
                  </ul>
                </li>
                <li>Nguồn
                  <ul>
                    <li>Thông tư 40/2021/TT-BTC - <a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-40-2021-TT-BTC-huong-dan-thue-gia-tri-gia-tang-thue-thu-nhap-ca-nhan-477635.aspx?anchor=dieu_4" target='_blank'>LINK</a></li>
                  </ul>
                </li>
              </ul>
              :
              null
          }
        </div>
      )

    } else if (selectedTaxType === "Kinh doanh Online và Offline") {
      //Kinh doanh Offline
      setTaxLaws(
        <div>
          <hr />
          <div className='tax-laws-header'>
            Luật thuế - Kinh doanh Online và Offline
            <button className='tax-law-button' onClick={handleTaxLawsBox}>
              {displayTaxLaws ? "Ẩn" : "Hiện"}
            </button>
          </div>
          {
            displayTaxLaws &&
            <ul>
              <li>Trường hợp 1:
                <ul>
                  <li>Dưới 100tr VND trong năm dương lịch</li>
                  <li>Thuế GTGT: KHÔNG NỘP</li>
                  <li>Thuế TNCN: KHÔNG NỘP</li>
                  <li>Lệ phí môn bài: KHÔNG NỘP</li>
                </ul>
              </li>
              <li>Trường hợp 2:
                <ul>
                  <li>Trên 100tr VND trong năm dương lịch</li>
                  <li>Thuế GTGT: 1% doanh thu</li>
                  <li>Thuế TNCN: 0.5% doanh thu</li>
                  <li>Lệ phí môn bài:
                    <ul>
                      <li>Doanh thu trong năm từ 100tr VND tới 300tr VND: 300.000 VND/năm</li>
                      <li>Doanh thu trong năm từ 300tr VND tới 500tr VND: 500.000 VND/năm</li>
                      <li>Doanh thu trong năm trên 500tr VND: 1.000.000 VND/năm</li>
                      <li>Nếu là doanh nghiệp thì xem Điều 4 Nghị định 139/2016/NĐ-CP để tính lệ phí môn bài theo vốn điều lệ/vốn đầu tư</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Hướng dẫn
                <ul>
                  <li>Khi bắt đầu kinh doanh phải đăng ký hộ kinh doanh, cá nhân kinh doanh</li>
                  <li>Khi đủ 100tr VND phải khai thuế trong tháng tiếp theo. Ví dụ: tổng doanh thu tới tháng 9 là 101tr VND thì phải đi khai và nộp thuế trong tháng 10</li>
                </ul>
              </li>
              <li>Nguồn
                <ul>
                  <li>Thông tư 40/2021/TT-BTC - <a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-40-2021-TT-BTC-huong-dan-thue-gia-tri-gia-tang-thue-thu-nhap-ca-nhan-477635.aspx?anchor=dieu_4" target='_blank'>LINK</a></li>
                  <li>Khoản 1 điều 3 Nghị định 139/2016/NĐ-CP - <a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Nghi-dinh-139-2016-ND-CP-le-phi-mon-bai-315033.aspx?anchor=dieu_3" target='_blank'>LINK</a></li>
                  <li>Điều 4 Nghị định 139/2016/NĐ-CP - <a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Nghi-dinh-139-2016-ND-CP-le-phi-mon-bai-315033.aspx?anchor=dieu_3" target='_blank'>LINK</a></li>
                </ul>
              </li>
            </ul>
          }
        </div>
      );

    } else if (selectedTaxType === "Affiliate Marketing") {
      //Affiliate Marketing
      setTaxLaws(
        <div>
          <hr />
          <div className='tax-laws-header'>
            Luật thuế - Affiliate Marketing
            <button className='tax-law-button' onClick={handleTaxLawsBox}>
              {displayTaxLaws ? "Ẩn" : "Hiện"}
            </button>
          </div>
          {
            displayTaxLaws &&
            <ul>
              <li>
                Lưu ý
                <ul>
                  <li>Nếu trả dưới 2tr thì chưa nộp</li>
                </ul>
              </li>
              <li>Bước 1:
                <ul>
                  <li>Được trả trên 2tr VND</li>
                  <li>Thuế TNCN: 10% (phải khai và nộp ngay khi phát sinh thu nhập)</li>
                  <li>Đây là thuế nộp tạm, đến cuối năm sau khi khai thuế nếu đủ mức nộp thuế TNCN thì sẽ nộp theo bước 2 bên dưới.</li>
                  <li>Điều 25, điểm i, khoản 1 Thông tư 111/2013/TT-BTC - <a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-111-2013-TT-BTC-Huong-dan-Luat-thue-thu-nhap-ca-nhan-va-Nghi-dinh-65-2013-ND-CP-205356.aspx" target='_blank'>LINK</a></li>
                </ul>
              </li>
              <li>Bước 2:
                <ul>
                  <li>Cuối năm sẽ tổng kết lại thu nhập để tính thuế</li>
                  <li>Nếu trả dưới 2tr thì chưa nộp</li>
                  <li>Nếu cả năm trên 2 triệu thì sẽ tính theo bảng dưới và được hoàn lại 10% đã nộp tạm của bước 1</li>
                  <li>Thuế TNCN: tính theo biểu thuế lũy tiến</li>
                  <li>Điều 14 Nghị định 65/2013/NĐ-CP - <a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Nghi-dinh-65-2013-ND-CP-huong-dan-Luat-thue-thu-nhap-ca-nhan-2007-sua-doi-2012-196609.aspx" target='_blank'>LINK</a></li>
                </ul>
              </li>
              <li>Bậc thuế:
                <table>
                  <thead>
                    <tr>
                      <th>Bậc thuế</th>
                      <th>Phần thu nhập tính thuế/năm (triệu đồng)</th>
                      <th>Phần thu nhập tính thuế/tháng (triệu đồng)</th>
                      <th>Thuế suất (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Đến 60</td>
                      <td>Đến 5</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Trên 60 đến 120</td>
                      <td>Trên 5 đến 10</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Trên 120 đến 216</td>
                      <td>Trên 10 đến 18</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Trên 216 đến 384</td>
                      <td>Trên 18 đến 32</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Trên 384 đến 624</td>
                      <td>Trên 32 đến 52</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Trên 624 đến 960</td>
                      <td>Trên 52 đến 80</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Trên 960</td>
                      <td>Trên 80</td>
                      <td>35</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>Hướng dẫn:
                <ul>
                  <li>Nếu trả dưới 2tr thì chưa nộp</li>
                </ul>
              </li>
              <li>Nguồn:
                <ul>
                  <li>Điều 25, điểm i, khoản 1 Thông tư 111/2013/TT-BTC - <a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-111-2013-TT-BTC-Huong-dan-Luat-thue-thu-nhap-ca-nhan-va-Nghi-dinh-65-2013-ND-CP-205356.aspx" target='_blank'>LINK</a></li>
                  <li>Điều 14 Nghị định 65/2013/NĐ-CP - <a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Nghi-dinh-65-2013-ND-CP-huong-dan-Luat-thue-thu-nhap-ca-nhan-2007-sua-doi-2012-196609.aspx" target='_blank'>LINK</a></li>
                  <li>Tìm hiểu thêm về thuế của Affiliate Marketing - <a href="https://thuvienphapluat.vn/chinh-sach-phap-luat-moi/vn/ho-tro-phap-luat/tu-van-phap-luat/63848/lam-tiep-thi-lien-ket-affiliate-marketing-co-phai-dong-thue" target='_blank'>LINK1</a> - <a href="https://thuvienphapluat.vn/banan/tin-tuc/tiep-thi-lien-ket-affiliate-marketing-la-gi-co-phai-dong-thue-thu-nhap-ca-nhan-khong-10461" target='_blank'>LINK2</a></li>

                </ul>
              </li>
            </ul>
          }
        </div>
      );

    } else if (selectedTaxType === "Freelancer") {
      //Freelancer
      setTaxLaws(
        <div>
          <hr />
          <div className='tax-laws-header'>
            Luật thuế - Freelancer
            <button className='tax-law-button' onClick={handleTaxLawsBox}>{displayTaxLaws ? "Ẩn" : "Hiện"}</button>
          </div>
          {
            displayTaxLaws
              ?
              <ul>
                <li>Tính thuế:
                  <ul>
                    <li>Không ký hợp đồng lao động: </li>
                    Thuế TNCN: 10%

                    <li>Hợp đồng lao động dưới 3 tháng và trả trên 2tr VND/lần</li>
                    Thuế TNCN: 10%
                    <li>Nếu đây là nguồn thu nhập duy nhất và sau khi giảm trừ gia cảnh chưa đến mức nộp thuế thì không nộp </li>
                    Thuế TNCN: KHÔNG NỘP
                  </ul>
                </li>
                <li>Hướng dẫn:
                  <ul>
                    <li>Phần lớn doanh nghiệp sẽ kê khai và nộp thuế cho người làm công</li>
                    <li>Nếu doanh nghiệp không khai thì cá nhân phải tự kê khai</li>
                    <li>Có thể được giảm trừ gia cảnh theo Thông tư 111/2013/TT-BTC - <a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-111-2013-TT-BTC-huong-dan-thuc-hien-Luat-thue-thu-nhap-ca-nhan-209738.aspx" target='_blank'>LINK</a></li>
                  </ul>
                </li>
                <li>Nguồn:
                  <ul>
                    <li>Luật Thuế thu nhập cá nhân số 04/2007/QH12 - <a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Luat-thue-thu-nhap-ca-nhan-2007-04-2007-QH12-52440.aspx" target='_blank'>LINK</a></li>
                    <li>Thông tư 111/2013/TT-BTC - <a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-111-2013-TT-BTC-huong-dan-thuc-hien-Luat-thue-thu-nhap-ca-nhan-209738.aspx" target='_blank'>LINK</a></li>
                  </ul>
                </li>
              </ul>
              :
              null
          }
        </div>
      )

    } else if (selectedTaxType === "") {
      setTaxLaws(
        <div></div>
      )
    }
  }, [selectedTaxType, displayTaxLaws])

  const handleTaxLawsBox = () => {
    setDisplayTaxLaws(displayTaxLaws => !displayTaxLaws)
  }

  // useEffect(() => {
  //   console.log(selectedTaxType);
  //   console.log(inputNumber);
  // }, [selectedTaxType, inputNumber])


  const handleInputChange = (event) => {
    setInputNumber(event.target.value);
  };

  const displayNotification = (noti) => {
    setNotification(noti);
    setDisplayNoti(true);

    // Clear any existing timeout before setting a new one
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
    timeoutRef.current = setTimeout(() => {
      setDisplayNoti(false);
    }, 2000);
  };

  const handleTaxType = () => {
    let calculatedTax = 0;
    if (selectedTaxType === "Kinh doanh Online") {
      //Kinh doanh Online
      if (inputNumber) {
        const income = parseInt(inputNumber);
        if (income >= 100000000) {
          calculatedTax = (income * 15) / 1000
        }
        setTotalTax(calculatedTax)
        setMessage(`Thuế của bạn là: ${calculatedTax} VND`);
        displayNotification(`Tính thành công!`)
      } else {
        setMessage("Vui lòng điền thu nhập của bạn!")
      }
    } else if (selectedTaxType === "Kinh doanh Online và Offline") {
      //Kinh doanh Offline
      if (inputNumber) {
        const income = parseInt(inputNumber);
        if ((income >= 100000000) && (income < 300000000)) {
          calculatedTax = ((income * 15) / 1000) + 300000
        } else if ((income >= 300000000) && (income < 500000000)) {
          calculatedTax = ((income * 15) / 1000) + 500000
        } else if ((income >= 500000000) && (income < 1000000000)) {
          calculatedTax = ((income * 15) / 1000) + 1000000
        }
        setTotalTax(calculatedTax)
        setMessage(`Thuế của bạn là: ${calculatedTax} VND`);
        displayNotification(`Tính thành công!`)
      } else {
        setMessage("Vui lòng điền thu nhập của bạn!")
      }
    } else if (selectedTaxType === "Freelancer") {
      //Freelancer
      if (inputNumber) {
        const income = parseInt(inputNumber);
        calculatedTax = (income * 10) / 100
        setTotalTax(calculatedTax)
        setMessage(`Thuế của bạn là: ${calculatedTax} VND`);
        displayNotification(`Tính thành công!`)
      } else {
        setMessage("Vui lòng điền thu nhập của bạn!")
      }

    } else if (selectedTaxType === "Affiliate Marketing") {
      //Affiliate Marketing
      if (inputNumber) {
        const income = parseInt(inputNumber);
        if (income < 2000000) {
          calculatedTax = 0;
        } else if (income <= 60000000) {
          calculatedTax = income * 0.05;
        } else if (income <= 120000000) {
          calculatedTax = (60000000 * 0.05) + ((income - 60000000) * 0.10);
        } else if (income <= 216000000) {
          calculatedTax = (60000000 * 0.05) + (60000000 * 0.10) + ((income - 120000000) * 0.15);
        } else if (income <= 384000000) {
          calculatedTax = (60000000 * 0.05) + (60000000 * 0.10) + (96000000 * 0.15) + ((income - 216000000) * 0.20);
        } else if (income <= 624000000) {
          calculatedTax = (60000000 * 0.05) + (60000000 * 0.10) + (96000000 * 0.15) + (168000000 * 0.20) + ((income - 384000000) * 0.25);
        } else if (income <= 960000000) {
          calculatedTax = (60000000 * 0.05) + (60000000 * 0.10) + (96000000 * 0.15) + (168000000 * 0.20) + (240000000 * 0.25) + ((income - 624000000) * 0.30);
        } else if (income > 960000000) {
          calculatedTax = (60000000 * 0.05) + (60000000 * 0.10) + (96000000 * 0.15) + (168000000 * 0.20) + (240000000 * 0.25) + (336000000 * 0.30) + ((income - 960000000) * 0.35);
        }

        setTotalTax(calculatedTax)
        setMessage(`Thuế của bạn là: ${calculatedTax} VND`);
        displayNotification(`Tính thành công!`)

      } else {
        setMessage("Vui lòng điền thu nhập của bạn!")
      }
    } else {
      setMessage("Vui lòng chọn loại thu nhập!")
    }
  };

  useEffect(() => {
    handleEditCard(cardId, selectedTaxType, inputNumber, totalTax, message, displayTaxLaws);
  }, [selectedTaxType, inputNumber, totalTax, message, displayTaxLaws])

  return (
    <div className='tax-card-container'>
      {/* <p>
        Chọn loại thu nhập và điền số tiền bạn nhận được từ nguồn thu nhập này trong năm dương lịch vừa qua nếu bạn muốn tính thuế của năm trước. Điền số tiền bạn bạn thu được từ đầu năm dương lịch để kiểm tra số thuế bạn sẽ phải trả là bao nhiêu.
      </p> */}
      <div className='group-1'>
        <div style={{ marginBottom: "8px", color: "#4C4848" }}>{`Thu nhập ${index + 1}`}</div>
        <button className='delete-button' onClick={() => { handleDeleteCard(cardId) }}>X</button>
        <div>
          <select value={selectedTaxType} onChange={handleSelectChange} className='tax-type-dropdown'>
            <option value="">Nguồn thu nhập đến từ...</option>
            {["Kinh doanh Online", "Kinh doanh Online và Offline", "Affiliate Marketing", "Freelancer"].map((type, index) => (
              <option key={index} value={type} >
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="number"
            value={inputNumber}
            placeholder='Thu nhập trong năm'
            onChange={handleInputChange}
            className='income-input-box'
          />
        </div>
        <button onClick={handleTaxType} className='calculate-button'>Tính ngay</button>
        {
          displayNoti
            ?
            <div style={{ color: "green" }}>{notification}</div>
            :
            null
        }
        <div>{message}</div>
      </div>
      <div className='group-2'>
        {taxLaws}
      </div>
    </div>
  )
}

export default TaxCard
