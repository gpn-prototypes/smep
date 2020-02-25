import React from 'react';
import block from 'bem-cn';
import PageHeader from '../../components/Header';
import { Button, ChoiceGroup } from '@gpn-design/uikit';

const main = block('main-page');
const filter = block('filter');

const filterItems = {
	types: [
		{
			value: 1,
			label: 'Все',
			checked: true,
		},
		{
			value: 2,
			label: 'Архивные',
		},
		{
			value: 3,
			label: 'Избранные',
		},
	],
	view: [
		{
			value: 1,
			label: 'Карточки',
			checked: true,
		},
		{
			value: 2,
			label: 'Списком',
		},
	]
};

const AllProjectsPage = () => {
	
  return (
		<>
			<PageHeader />
			<main className={main()}>
				<header className={main('header').mix('filter')}>
					<div className={filter('left-side')}>
						<h1 className='text text_size_xl text_weight_bold text_view_primary'>Проекты</h1>
						<ChoiceGroup
							isMultiple={false}
							items={filterItems.types}
							wpSize="s"
						/>
					</div>
					<div className={filter('right-side')}>
						<ChoiceGroup
							isMultiple={false}
							items={filterItems.view}
							wpSize="s"
						/>
						<Button wpSize='s' view='ghost' withIcon='left' className='decorator decorator_indent-l_m'>
							{/* <IconAdd size='xs' /> */}
							Добавить болванку
						</Button>
					</div>
					


				</header>
			</main>
		</>
  );
};

export { AllProjectsPage };