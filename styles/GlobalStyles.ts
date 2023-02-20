import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
//========================================================================================================
// GENERAL
//========================================================================================================
* {
	box-sizing: border-box;
}
*::before {
	box-sizing: border-box;
}
*::after {
	box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.black};
	margin : 0;
}
main {
	height : 100vh;
}
.applogo{
	margin : 20px
}
.container {
	display : flex;
	justify-content : center;
	align-item : center;
}
.loader {
  border: 3px solid #f3f3f3; 
  border-top: 3px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 5rem auto;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.card_container{
	display : grid;
	grid-template-columns: repeat(3, 1fr);
}
.card{
	background-color : ${({ theme }) => theme.colors.lighterBlack};
	padding : 6px;
	border : 1px solid #3A3A3A80;
	border-radius : 10px;
	margin : 20px;
	cursor : pointer;
}
.cardInfo{
	display : grid;
	grid-template-columns: repeat(2, 1fr);
}
.cardInfoItem {
	display : grid;
	grid-template-columns: repeat(2, 1fr);
}
.cardInfo p{
	font-family : Lato;
	font-weight : 400;
	margin : 0;
	padding : 0;
	line-height : 24px;
}
.cardTitle {
	font-family : Cinzel;
	font-weight : 700;
	font-size : 20px;
	color: ${({ theme }) => theme.colors.white};
	line-height : 30px;
}
.cardCategory {
	color: ${({ theme }) => theme.colors.gold};
}
.cardValue {
	color: ${({ theme }) => theme.colors.white};
}
.quest{
	background-color : ${({ theme }) => theme.colors.lighterBlack};
	padding : 6px;
	border : 1px solid #3A3A3A80;
	border-radius : 10px;
	margin : 20px;
}
.questTitlePart{
	display : flex;
	justify-content : center;
	align-items : center;
	padding : 0 5rem;
}
.questInfo{
	display : grid;
	grid-template-columns: repeat(2, 1fr);
	padding : 0.5rem;
}
.questInfo p{
	font-family : Lato;
	font-weight : 400;
	margin : 0;
	padding : 0;
	line-height : 24px;
}
.questTitleArrow{
	margin : 1rem;
}
.questDescription{
	color : ${({ theme }) => theme.colors.grey};
	min-height : 5rem;
}
.questBottom {
	display : flex;
	justify-content : space-between;
}
.questRewards{
	font-family : Cinzel;
	font-weight : 700;
	font-size : 16px;
	color: ${({ theme }) => theme.colors.white};
	line-height : 30px;
}
.rewardsItem{
	border : 1px solid #BEA77E;
	color: ${({ theme }) => theme.colors.white};
	text-align : center;
	background: linear-gradient(180deg, rgba(7, 15, 29, 0) 0%, rgba(54, 77, 137, 0.4) 100%);
	width : 60px;
	height : 60px;
	display : flex;
	flex-direction : column;
	justify-content : center;
	border-radius : 2.5px;
}
.rewardsItem p{
	padding : 0;
	margin : 0;
}
.goBackBtn{
	border : 1px solid #BEA77E;
	color: ${({ theme }) => theme.colors.white};
	text-align : center;
	padding : 10px 20px;
	border-radius : 2.5px
}
`;

export default GlobalStyle;
