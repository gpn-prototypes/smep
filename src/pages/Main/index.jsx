import React, { useState } from 'react';
import block from 'bem-cn';
import PageHeader from '../../components/Header';
import { Button, ChoiceGroup, IconAdd } from '@gpn-design/uikit';
import ProjectList from '../../components/ProjectList';

const main = block('main-page');
const filter = block('filter');
const d = block('decorator');


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

const AllProjectsPage = (props) => {
	const { projects } = props;
	const [layout, setLayout] = useState('grid');
	
	const layoutChanger = () => {
		if (layout === 'grid') {
			return 'list'
		} else {
			return 'grid'
		}
	}

  return (
		<>
			<PageHeader />
			<main className={
					d({'space-h': '3xl', 'indent-t': '2xl'})
					.mix(main())
				}>
				<header className={
						main('header')
						.mix([
							'filter', 
							d({'distribute': 'between', 'vertical-align': 'center', 'indent-b': '2xl'})
						])
					}>
					<div className={filter('left-side')}>
						<h1 className={
								d({'indent-a': 'none', 'indent-r': '5xl'})
								.mix('text text_size_xl text_weight_bold text_view_primary text_display_inline-block')
							}>Проекты</h1>
						<ChoiceGroup
							isMultiple={false}
							items={filterItems.types}
							wpSize='s'
							value={1}
						/>
					</div>
					<div className={filter('right-side')}>
						<ChoiceGroup
							isMultiple={false}
							items={filterItems.view}
							wpSize='s'
							className={d({'indent-r': 's'})}
							onChange={() => setLayout(layoutChanger)}
							value={1}
						/>
						<Button wpSize='s' view='ghost' withIcon='left'>
							<IconAdd size={'xs'} className={'button__icon'} />
							Добавить болванку
						</Button>
					</div>
				</header>

					<ProjectList projects={projects} layout={layout}/>
				
			</main>
		</>
  );
};

export { AllProjectsPage };