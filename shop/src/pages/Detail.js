import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Table,
  Form,
  Button,
  Alert,
  Nav,
} from "react-bootstrap";
import { useEffect, useState, timeout } from "react";
import { addCart } from "./../store";
import { useDispatch } from "react-redux";

export default function Detail(props) {
  const shoes = props.shoes;
  console.log("shoes", shoes);

  // 특별할인 블럭 보여주기
  const [discount, setDiscount] = useState(
    <Col>
      <Alert variant="danger">
        해당 상품을 3초 이내에 구입 시 특별할인 10%
      </Alert>
    </Col>
  );

  // 수량 관리
  const [amount, setAmount] = useState(0);

  // store 저장된 함수 사용
  const dispach = useDispatch();

  // 정보를 유지한 채 이동
  const navigate = useNavigate();

  useEffect(() => {
    // 마운트 시 실행할 구문

    setTimeout(() => {
      // 3초가 지나면 특별할인 블럭 제거
      setDiscount(null); //discaount=null
    }, 3000);

    if (isNaN(amount)) {
      alert("수량을 확인해 주세요");
      setAmount(0);
    }

    return () => {
      // 언마운트 시 실행 구문
      clearTimeout(timeout);
    };
  }, [amount]);

  // 주소줄에 넘어오는 아이디 가져오기
  const { id } = useParams();
  // console.log("id", id);
  //id 가 없는 상태라면 컴파일 에러 화면 발생
  // shoes 배열에 id 가 존재하느냐? 확인 후 쓰기
  let product = shoes.find((shoe) => shoe.id === parseInt(id));
  let result = undefined;
  if (!product) {
    result = <Row>잘못된 요청입니다</Row>;
  } else {
    result = (
      <>
        <Row>{discount}</Row>
        <Row className="mt-3">
          <Col>
            <img src={product.src} alt={product.src} />
          </Col>
          <Col className="align-self-center">
            <Table>
              <tbody>
                <tr>
                  <td>제품명</td>
                  <td>
                    <b>{product.pname}</b>
                  </td>
                </tr>
                <tr>
                  <td>색상</td>
                  <td>
                    <b>{product.color}</b>
                  </td>
                </tr>
                <tr>
                  <td>가격</td>
                  <td>
                    <b>{product.price}</b>
                  </td>
                </tr>
                <tr>
                  <td>구매수량</td>
                  <td>
                    <Form.Control
                      placeholder="수량"
                      name="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                if (window.confirm("장바구니로 이동하시겠습니까?")) {
                  //장바구니 추가 함수 호출
                  dispach(addCart({ product, amount }));
                  //카트 페이지 이동
                  navigate("/cart");
                }
              }}
            >
              구매하기
            </Button>
          </Col>
        </Row>
      </>
    );
  }
  return (
    <Container>
      {result}
      <ProductNav />
    </Container>
  );
}

function ProductNav() {
  // tabs 변수값이 변화가 일어나면 화면에 보여지는 내용도 변화를 해줌
  const [tabs, setTabs] = useState(0);

  const onClick = (e) => {
    // 리뷰 클릭 시 tabs = 0
    // Q&A 클릭 시 tabs = 1
    // 상품정보 클릭 시 tabs = 2
    let id = e.target.id;

    if (id == 0) {
      setTabs(0);
    } else if (id == 1) {
      setTabs(1);
    } else {
      setTabs(2);
    }
  };

  return (
    <div className="mt-3">
      <Nav defaultActiveKey="/review" variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="/review" onClick={onClick} id={0}>
            리뷰
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/qna" onClick={onClick} id={1}>
            Q&A
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/product" onClick={onClick} id={2}>
            상품정보
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContents tabs={tabs} />
    </div>
  );
}

function TabContents(props) {
  if (props.tabs === 0) {
    return <div>첫번째 탭에 보여줄 내용</div>;
  } else if (props.tabs === 1) {
    return <div>두번째 탭에 보여줄 내용</div>;
  } else {
    return <div>세번째 탭에 보여줄 내용</div>;
  }
}
