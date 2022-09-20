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
            {value => (
                <>
                    <div
                        style={{
                            width : '64px',
                            height : '64px',
                            background : value.state.color
                        }}
                    />
                    <div
                        style={{
                            width :'32px',
                            height : '32px',
                            background : value.state.subcolor
                        }}
                    />
                </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox;