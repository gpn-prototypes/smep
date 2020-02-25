import React from 'react';
import { Header, Logo, SearchBar, Login } from '@gpn-design/uikit';

const leftSide = [
	{
		indent: 'l',
		children: (
		<Logo>
			<p className="text text_size_l text_weight_bold">Logotype</p>
		</Logo>
		),
	},
	{
		indent: 'l',
		children: <SearchBar placeholder={'Я ищу'} label={'Поиск'} />,
	}
];

const rightSide = [
	{
		indent: 's',
		children: (
		<Login
			isLogged
			personName={'Вадим Матвеев'}
			personInfo={'В другом офисе'}
			personStatus={'active'}
			linkToPhoto={
			'https://pbs.twimg.com/profile_images/1150453787603156992/DoiKLDMY_400x400.png'
			}
		/>
		),
	},
];

const PageHeader = () => {
  return (
		<Header leftSide={leftSide} rightSide={rightSide} />
  );
};

export default PageHeader;