import {ColorConsumer} from "../Context/color";

const ColorBox2 = () => {
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

export default ColorBox2;