import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello = (props: HelloProps) => {
    return <h1>Hello from {props.compiler} and {props.framework} !</h1>
}

export class HelloC extends React.Component<HelloProps, {}>{
    render() {
        const { compiler, framework } = this.props
        return <h1>Hello from {compiler} and {framework} !</h1>
    }

}
