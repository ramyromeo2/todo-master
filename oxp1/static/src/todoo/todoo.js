/** @odoo-module **/

import { Component } from "@odoo/owl";
import { TodoList } from "./todo_list";
import { useTodoStore } from "./todo_store";
import { Layout } from "../layout";

export class Todoo extends Component {
  static template = "oxp.Todoo";
  static components = { TodoList, Layout };

  setup() {
    this.store = useTodoStore();
  }



  mounted(ev) {
    const listNameInput = document.getElementById("list-name-input");
    if (ev.keyCode === 13 && listNameInput && listNameInput.value !== "") {
      this.addNewList();
    }
  }
  
  addNewList(ev) {

 
    const listNameInput = document.getElementById("list-name-input"); 
    const listName = listNameInput ? listNameInput.value : "";
    this.store.createList(listName);
    if (listNameInput) {
      listNameInput.value = ""; 
    }
  }
  
}
