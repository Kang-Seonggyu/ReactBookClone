// import ColorContext from "../Context/color";
//
// const ColorBox = () => {
//     return (
//         <ColorContext.Consumer>
//             {value => (
//                 <div
//                     style={{
//                         width : '64px',
//                         height : '64px',
//                         background : value.color
//                     }}
//                 />
//             )}
//         </ColorContext.Consumer>
//     );
// };
//
// export default ColorBox;
import {ColorConsumer} from "../Context/color";

const ColorBox = () => {
    return (
        <ColorConsumer>
            {({state}) => (
                <>
                    <div
                        style={{
                            width : '64px',
                            height : '64px',
                            background : state.color
                        }}
                    />
                    <div
                        style={{
                            width :'32px',
                            height : '32px',
                            background : state.subcolor
                        }}
                    />
                </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox;