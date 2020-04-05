import React, { Component } from "react";
import axios from "axios";
import { style } from "../styles/style";
import { Container, Row, Col } from "react-grid-system";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const SpeechRecognitionInst =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognitionInst();

recognition.continous = false;
recognition.interimResults = true;
recognition.lang = "en-US";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      month_in_text: "",
      day_in_text: "",
      hour: "",
      min: "",
      listening: false,
      name: "",
      location: "",
      country: ""
    };
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeMonth = this.onChangeMonth.bind(this);
    this.onChangeDay = this.onChangeDay.bind(this);
    this.onSubmitMonth = this.onSubmitMonth.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);

    this.toggleListenName = this.toggleListenName.bind(this);
    this.toggleListenLocation = this.toggleListenLocation.bind(this);
    this.toggleListenCountry = this.toggleListenCountry.bind(this);
    this.toggleListenYear = this.toggleListenYear.bind(this);
    this.toggleListenMonth = this.toggleListenMonth.bind(this);
    this.toggleListenDay = this.toggleListenDay.bind(this);
    this.toggleListenHour = this.toggleListenHour.bind(this);
    this.toggleListenMin = this.toggleListenMin.bind(this);

    this.handleListenName = this.handleListenName.bind(this);
    this.handleListenLocation = this.handleListenLocation.bind(this);
    this.handleListenCountry = this.handleListenCountry.bind(this);
    this.handleListenYear = this.handleListenYear.bind(this);
    this.handleListenMonth = this.handleListenMonth.bind(this);
    this.handleListenDay = this.handleListenDay.bind(this);
    this.handleListenHour = this.handleListenHour.bind(this);
    this.handleListenMin = this.handleListenMin.bind(this);
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }
  onChangeCountry(e) {
    this.setState({
      country: e.target.value
    });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeYear(e) {
    this.setState({
      year: e.target.value
    });
  }
  onChangeMonth(e) {
    this.setState({
      month_in_text: e.target.value
    });
  }
  onChangeDay(e) {
    this.setState({
      day_in_text: e.target.value
    });
  }
  onChangeHour(e) {
    this.setState({
      day_in_text: e.target.value
    });
  }
  onChangeMin(e) {
    this.setState({
      day_in_text: e.target.value
    });
  }
  toggleListenHour() {
    document.getElementById("micBtnHour").style.opacity = 0.4;
    this.setState(
      {
        listening: true
      },
      this.handleListenHour
    );
  }

  handleListenHour() {
    if (this.state.listening) {
      recognition.start();
    } else {
      document.getElementById("micBtnHour").style.opacity = 1;
      recognition.stop();
      recognition.onend = () => {};
    }
    recognition.onstart = () => {};
    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else {
          interimTranscript += transcript;
          this.setState({
            hour: interimTranscript
          });
        }
      }
      const transcriptArr = finalTranscript.split(" ");
      recognition.onend = () => {
        document.getElementById("micBtnHour").style.opacity = 1;
        const finalText = transcriptArr.join(" ");
        this.setState({
          listening: false,
          hour: finalText
        });
      };
    };
    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById("micBtnHour").style.opacity = 1;
    };
  }

  toggleListenMin() {
    document.getElementById("micBtnMin").style.opacity = 0.4;
    this.setState(
      {
        listening: true
      },
      this.handleListenMin
    );
  }

  handleListenMin() {
    if (this.state.listening) {
      recognition.start();
    } else {
      document.getElementById("micBtnMin").style.opacity = 1;
      recognition.stop();
      recognition.onend = () => {};
    }
    recognition.onstart = () => {};
    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else {
          interimTranscript += transcript;
          this.setState({
            min: interimTranscript
          });
        }
      }
      const transcriptArr = finalTranscript.split(" ");
      recognition.onend = () => {
        document.getElementById("micBtnMin").style.opacity = 1;
        const finalText = transcriptArr.join(" ");
        this.setState({
          listening: false,
          min: finalText
        });
      };
    };
    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById("micBtnMin").style.opacity = 1;
    };
  }

  toggleListenDay() {
    document.getElementById("micBtnDay").style.opacity = 0.4;
    this.setState(
      {
        listening: true
      },
      this.handleListenDay
    );
  }

  handleListenDay() {
    if (this.state.listening) {
      recognition.start();
    } else {
      document.getElementById("micBtnDay").style.opacity = 1;
      recognition.stop();
      recognition.onend = () => {};
    }
    recognition.onstart = () => {};
    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else {
          interimTranscript += transcript;
          this.setState({
            day_in_text: interimTranscript
          });
        }
      }
      const transcriptArr = finalTranscript.split(" ");
      recognition.onend = () => {
        document.getElementById("micBtnDay").style.opacity = 1;
        const finalText = transcriptArr.join(" ");
        this.setState({
          listening: false,
          day_in_text: finalText
        });
        this.onSubmitDay("", this.state.day_in_text);
      };
    };
    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById("micBtnDay").style.opacity = 1;
    };
  }

  toggleListenMonth() {
    document.getElementById("micBtnMonth").style.opacity = 0.4;
    this.setState(
      {
        listening: true
      },
      this.handleListenMonth
    );
  }

  handleListenMonth() {
    if (this.state.listening) {
      recognition.start();
    } else {
      document.getElementById("micBtnMonth").style.opacity = 1;
      recognition.stop();
      recognition.onend = () => {};
    }
    recognition.onstart = () => {};
    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else {
          interimTranscript += transcript;
          this.setState({
            month_in_text: interimTranscript
          });
        }
      }
      const transcriptArr = finalTranscript.split(" ");
      recognition.onend = () => {
        document.getElementById("micBtnMonth").style.opacity = 1;
        const finalText = transcriptArr.join(" ");
        this.setState({
          listening: false,
          month_in_text: finalText
        });
        this.onSubmitMonth("", this.state.month_in_text);
      };
    };
    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById("micBtnMonth").style.opacity = 1;
    };
  }

  toggleListenYear() {
    document.getElementById("micBtnYear").style.opacity = 0.4;
    this.setState(
      {
        listening: true
      },
      this.handleListenYear
    );
  }

  handleListenYear() {
    if (this.state.listening) {
      recognition.start();
    } else {
      document.getElementById("micBtnYear").style.opacity = 1;
      recognition.stop();
      recognition.onend = () => {};
    }
    recognition.onstart = () => {};
    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else {
          interimTranscript += transcript;
          this.setState({
            year: interimTranscript
          });
        }
      }
      const transcriptArr = finalTranscript.split(" ");
      recognition.onend = () => {
        document.getElementById("micBtnYear").style.opacity = 1;
        const finalText = transcriptArr.join(" ");
        this.setState({
          listening: false,
          year: finalText
        });
      };
    };
    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById("micBtnYear").style.opacity = 1;
    };
  }

  toggleListenName() {
    document.getElementById("micBtnName").style.opacity = 0.4;
    this.setState(
      {
        listening: true
      },
      this.handleListenName
    );
  }

  handleListenName() {
    if (this.state.listening) {
      recognition.start();
    } else {
      document.getElementById("micBtnName").style.opacity = 1;
      recognition.stop();
      recognition.onend = () => {};
    }
    recognition.onstart = () => {};
    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else {
          interimTranscript += transcript;
          this.setState({
            name: interimTranscript
          });
        }
      }
      const transcriptArr = finalTranscript.split(" ");
      recognition.onend = () => {
        document.getElementById("micBtnName").style.opacity = 1;
        const finalText = transcriptArr.join(" ");
        this.setState({
          listening: false,
          name: finalText
        });
      };
    };
    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById("micBtnName").style.opacity = 1;
    };
  }

  toggleListenLocation() {
    document.getElementById("micBtnLocation").style.opacity = 0.4;
    this.setState(
      {
        listening: true
      },
      this.handleListenLocation
    );
  }

  handleListenLocation() {
    if (this.state.listening) {
      recognition.start();
    } else {
      document.getElementById("micBtnLocation").style.opacity = 1;
      recognition.stop();
      recognition.onend = () => {};
    }
    recognition.onstart = () => {};
    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else {
          interimTranscript += transcript;
          this.setState({
            location: interimTranscript
          });
        }
      }
      const transcriptArr = finalTranscript.split(" ");
      recognition.onend = () => {
        document.getElementById("micBtnLocation").style.opacity = 1;
        const finalText = transcriptArr.join(" ");
        this.setState({
          listening: false,
          location: finalText
        });
      };
    };
    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById("micBtnLocation").style.opacity = 1;
    };
  }

  toggleListenCountry() {
    document.getElementById("micBtnCountry").style.opacity = 0.4;
    this.setState(
      {
        listening: true
      },
      this.handleListenCountry
    );
  }

  handleListenCountry() {
    if (this.state.listening) {
      recognition.start();
    } else {
      document.getElementById("micBtnCountry").style.opacity = 1;
      recognition.stop();
      recognition.onend = () => {};
    }
    recognition.onstart = () => {};
    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else {
          interimTranscript += transcript;
          this.setState({
            country: interimTranscript
          });
        }
      }
      const transcriptArr = finalTranscript.split(" ");
      recognition.onend = () => {
        document.getElementById("micBtnCountry").style.opacity = 1;
        const finalText = transcriptArr.join(" ");
        this.setState({
          listening: false,
          country: finalText
        });
      };
    };
    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById("micBtnCountry").style.opacity = 1;
    };
  }

  onSubmitMonth(e) {
    if (e) {
      e.preventDefault();
    }
    axios
      .get(`http://localhost:3000/months`)
      .then(res => {
        let data = res.data;
        let found = data.find(
          element => element.name == this.state.month_in_text.trim()
        );
        document.getElementById("month").value = found.id;
      })
      .catch(err => {
        console.error(err);
      });
  }

  onSubmitDay(e) {
    if (e) {
      e.preventDefault();
    }
    axios
      .get(`http://localhost:3000/days`)
      .then(res => {
        let data = res.data;
        let found = data.find(
          element => element.name == this.state.day_in_text.trim()
        );
        document.getElementById("day").value = found.id;
      })
      .catch(err => {
        console.error(err);
      });
  }
  componentDidMount() {
    document.body.style.backgroundColor = "lightseagreen";
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <form>
          <Container
            style={{
              border: "1px solid white",
              paddingTop: "50px",
              paddingBottom: "50px"
            }}
          >
            <Row>
              <Col md={4}>
                <font style={{ fontSize: 17 }}>Name:</font>
              </Col>
              <Col md={4}>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
                <input
                  disabled={this.state.listening}
                  type="button"
                  style={style.micBtn}
                  id={"micBtnName"}
                  onClick={() => {
                    this.toggleListenName();
                  }}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={4}>
                <font style={{ fontSize: 17 }}>Gender:</font>
              </Col>
              <Col md={2}>
                <input
                  style={{
                    width: 15,
                    height: 15,
                    marginRight: 5,
                    marginLeft: 50
                  }}
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                />
                Male
              </Col>
              <Col md={1}>
                <input
                  style={{ width: 15, height: 15, marginRight: 5 }}
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                />
                Female
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md={4}>
                <font style={{ fontSize: 17 }}>Country:</font>
              </Col>
              <Col md={4}>
                <input
                  type="text"
                  value={this.state.country}
                  onChange={this.onChangeCountry}
                />

                <input
                  disabled={this.state.listening}
                  type="button"
                  style={style.micBtn}
                  id={"micBtnCountry"}
                  onClick={() => {
                    this.toggleListenCountry();
                  }}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={4}>
                <font style={{ fontSize: 17 }}>Date:</font>
              </Col>
              <Col md={5}>
                <input
                  type="hidden"
                  value={this.state.day_in_text}
                  onChange={this.onChangeDay}
                />
                <input id="day" type="text" placeholder={"Date"} size="2" />
                <input
                  disabled={this.state.listening}
                  type="button"
                  style={style.micBtn}
                  id={"micBtnDay"}
                  onClick={() => {
                    this.toggleListenDay();
                  }}
                />
                <input
                  type="hidden"
                  value={this.state.month_in_text}
                  onChange={this.onChangeMonth}
                />
                <input id="month" type="text" placeholder={"Month"} size="2" />
                <input
                  disabled={this.state.listening}
                  type="button"
                  style={style.micBtn}
                  id={"micBtnMonth"}
                  onClick={() => {
                    this.toggleListenMonth();
                  }}
                />
                <input
                  type="text"
                  value={this.state.year}
                  onChange={this.onChangeYear}
                  placeholder={"Year"}
                  size="2"
                />
                <input
                  disabled={this.state.listening}
                  type="button"
                  style={style.micBtn}
                  id={"micBtnYear"}
                  onClick={() => {
                    this.toggleListenYear();
                  }}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={4}>
                <font style={{ fontSize: 17 }}>Time:</font>
              </Col>
              <Col md={4}>
                <input
                  type="text"
                  value={this.state.hour}
                  onChange={this.onChangeHour}
                  placeholder={"00"}
                  size="2"
                />
                <input
                  disabled={this.state.listening}
                  type="button"
                  style={style.micBtn}
                  id={"micBtnHour"}
                  onClick={() => {
                    this.toggleListenHour();
                  }}
                />
                <input
                  type="text"
                  value={this.state.min}
                  onChange={this.onChangeMin}
                  placeholder={"00"}
                  size="2"
                />
                <input
                  disabled={this.state.listening}
                  type="button"
                  style={style.micBtn}
                  id={"micBtnMin"}
                  onClick={() => {
                    this.toggleListenMin();
                  }}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={4}>
                <font style={{ fontSize: 17 }}>Location:</font>
              </Col>
              <Col md={4}>
                <input
                  type="text"
                  value={this.state.location}
                  onChange={this.onChangeLocation}
                />

                <input
                  disabled={this.state.listening}
                  type="button"
                  style={style.micBtn}
                  id={"micBtnLocation"}
                  onClick={() => {
                    this.toggleListenLocation();
                  }}
                />
              </Col>
            </Row>
          </Container>
        </form>

        <div>
          <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a style={{ color: "black" }} href="https://www.pulztec.com/">
                  {" "}
                  Pulz Technologies{" "}
                </a>
              </MDBContainer>
            </div>
          </MDBFooter>
        </div>
      </div>
    );
  }
}
