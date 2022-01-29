import React, { useRef } from 'react';
import './styles.css';
import { GiGunshot } from 'react-icons/gi'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent)=>void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {  
    const inputRef = useRef<HTMLInputElement>(null);
    return (
    <form 
        className='input'
        onSubmit={(e)=> {
        handleAdd(e)
        inputRef.current?.blur()
    }}>
        <input 
            ref={inputRef}  
            type='input'
            value={todo} 
            onChange={
            (e)=> setTodo(e.target.value)
            }
            placeholder="Stealing stolen goods doesn't count as stealing" className='input__box'
        />
    <button className='input_submit' type='submit' >
    <GiGunshot />
    </button>
    </form>
  );
};

export default InputField;
