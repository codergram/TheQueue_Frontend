import utils from "../utils";
import { SERVER_URL_BACKEND } from "../settingsBackend";

function apiFacade() {
  //OBSERVE fetchAny takes a url and a callback. The callback handles the data from the response body.

  /**
   * Backend DATA LOCAL
   */
  // function getData() {
  //   return data;
  // }

  // function addQuestion(question) {
  //   question.id = questions.length + 1;
  //   questions.push(question);
  // }

  // function getQuestions() {
  //   return questions;
  // }

  // function getOldQuestions() {
  //   return questions;
  // }

  // function getQuestion(id) {
  //   return questions.find((q) => q.id === parseInt(id));
  // }

  // function editQuestion(question) {
  //   let questionToEdit = questions.find((q) => q.id === question.id);
  //   questionToEdit.teacher.teacherName = question.teacher.teacherName;
  //   questionToEdit.teacher.zoom_url = question.teacher.zoom_url;
  //   questionToEdit.answer = question.answer;
  //   questionToEdit.teacherLink = question.teacherLink;
  // }

  // function getProxy() {
  //   return proxyData;
  // }

  /**
   * Backend DATA SERVER
   */

  function getData(callback) {
    // Change me to do something with data
    utils.fetchAny(SERVER_URL_BACKEND + "/api/schools/all", callback);
  }

  function addQuestion(question, callback) {
    utils.fetchAny(
      SERVER_URL_BACKEND + "/api/question",
      callback,
      "POST",
      question
    );
  }

  function getQuestions(semesterID, callback) {
    utils.fetchAny(
      SERVER_URL_BACKEND + "/api/questions/semester/" + semesterID,
      callback
    );
  }

  function getProxy(callback) {
    utils.fetchAny(SERVER_URL_BACKEND + "/api/covid", callback);
  }

  function addAnswer(answer, callback) {
    utils.fetchAny(
      SERVER_URL_BACKEND + "/api/question",
      callback,
      "PUT",
      answer
    );
  }

  return {
    getData,
    addQuestion,
    getQuestions,
    // getOldQuestions,
    // getQuestion,
    // editQuestion,
    getProxy,
    addAnswer,
  };
}
const facade = apiFacade();
export default facade;
