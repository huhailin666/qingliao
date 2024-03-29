import { Modal } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
const popKeyMap: Record<string, string> = {}

interface Props{
    comp:React.ReactElement
}
const renderPop = ({ Comp, props,key }:Props) => {
    // console.log(222, component.props);
    let container;
    if (popKeyMap[key]) {
        container = document.getElementById(popKeyMap[key]);
    } else {
        container = document.createElement('div');
        const id = Math.random().toString()
        container.setAttribute("id", id);
        popKeyMap[key] = id;
    }
    document.body.appendChild(container); // 将元素添加到body中
    // const comp = 
    const root = ReactDOM.createRoot(container);
    root.render(<Modal open getContainer={container}> <Comp {...props}></Comp> </Modal>)
}

export default renderPop;