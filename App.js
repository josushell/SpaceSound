import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mainloading from "./loading";

// component name은 대문자로 시작하자
export default class App extends React.Component {
  state = {
    month:'',
    year:'',
  };

  getinfo = async (solmonth, solyear) => {
    console.log(solyear,solmonth);

    var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/B090041/openapi/service/AstroEventInfoService/getAstroEventInfo'; /*URL*/
    var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + ; /*Service Key*/
    queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent(solyear); /**/
    queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent(solmonth); /**/

    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        const data = 'Status: ' + this.status + 'nHeaders: ' + JSON.stringify(this.getAllResponseHeaders()) + 'nBody: ' + this.responseText;

        console.log(data);
      }
    };

    xhr.send('');
  }
  componentDidMount() {
    var MONTH=new Date().getMonth() + 1;
    var YEAR= new Date().getFullYear();

    this.setState({
      month: MONTH,
      year:YEAR
    })
    
    this.getinfo(MONTH, YEAR);
  }

  render() {
    return <Mainloading />;
  }
}