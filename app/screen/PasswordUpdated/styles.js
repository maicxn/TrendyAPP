import react from "react";
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'

export const KeyboardView = styled.KeyboardAvoidingView`
    background-color: #25252D;
    flex: 1; 
    align-items: center;
    justify-content: center;
`
export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    width: 100%;
    padding: 20px;
    margin: 40px;
`

export const Title = styled.Text`
    color: #FFF;
    font-size: 36px;
    font-weight: 700;
`  

export const SubTitle = styled.Text`
    color: #FFF;
    font-size: 16px;
    opacity: 0.4;
    margin-bottom: 30px;
    text-align: center;
`  

export const Input = styled.TextInput`
    border: 2px solid #484848;
    margin-bottom: 20px;
    padding: 15px 20px; 
    color: #fff;
    font-size: 15px;
    border-radius: 9px;
    width: 90%;
`

export const ButtonSubmit = styled.TouchableOpacity`
    backgroundColor: #0D0D1F;
    border-radius: 28px;
    padding: 10px 20px;
    width: 300px;
    align-items: center;
    margin-bottom: 20px
`

export const TextSubmit = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
`

export const Afirmativo = styled.Image`
    margin-top: 50px
`