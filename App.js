import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mainloading from "./loading";

// component name은 대문자로 시작하자
export default function App() {
  return <Mainloading />;
}

var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/B090041/openapi/service/AstroEventInfoService/getAstroEventInfo'; /*URL*/
var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+''; /*Service Key*/
queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent('2017'); /**/
queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent('09'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      const data='Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText;

        console.log(data);
    }
};

xhr.send('');