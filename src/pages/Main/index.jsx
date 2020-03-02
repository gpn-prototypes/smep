import React, { useState } from 'react';
import block from 'bem-cn';
import PageHeader from '../../components/Header';
import { Text, Button, ChoiceGroup } from '@gpn-design/uikit';
import ProjectListCard from '../../components/ProjectListCard';
import ProjectListTableItem from '../../components/ProjectListTableItem';

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

	let projectListMarkup;

	if (layout === 'grid') {
		const grid = block('tpl-grid');
		projectListMarkup = (
			<div 
				className={grid({
					'l-ratio': '1-1-1',
					'xl-ratio': '1-1-1-1',
					'col-gap': 'half',
					'row-gap': 'half'
				})}
			>
				{projects.map((project) => {
					return (
						<ProjectListCard 
							key={project.id}
							number={project.id}
							company={project.company} 
							title={project.title}
							stage={project.stage}
							status={project.status}
							badge={project.badge}
						/>
					)
				})}
			</div>
		)
	} else {
		const table = block('pt-table');
		projectListMarkup = (
			<table 
				className={table({
					'view': 'default',
					'vertical-align': 'top',
					'border': 'between',
					'stripe': 'even',
					'space-a': 'm'
				})}
			>
				<thead>
					<tr className={table('row', {'view': 'head'})}>
						<td className={table('col')}>
							<Text tag='p' size='xs' view='secondary' transform='uppercase' spacing='xs'>Номер</Text>
						</td>
						<td className={table('col' )}>
							<Text tag='p' size='xs' view='secondary' transform='uppercase' spacing='xs'>Название</Text>
						</td>
						<td className={table('col')}>
							<Text tag='p' size='xs' view='secondary' transform='uppercase' spacing='xs'>Блок</Text>
						</td>
						<td className={table('col')}>
							<Text tag='p' size='xs' view='secondary' transform='uppercase' spacing='xs'>Этап</Text>
						</td>
						<td className={table('col')}>
							<Text tag='p' size='xs' view='secondary' transform='uppercase' spacing='xs'>Статус</Text>
						</td>
						<td className={table('col', {'align': 'right'})}>
							<Text tag='p' size='xs' view='secondary' transform='uppercase' spacing='xs'>Экспертиза</Text>
						</td>
					</tr>
				</thead>
				<tbody>
					{projects.map((project) => {
						return (
							<ProjectListTableItem 
								key={project.id}
								number={project.id}
								company={project.company} 
								title={project.title}
								stage={project.stage}
								status={project.status}
								badge={project.badge}
							/>
						)
					})}
				</tbody>
			</table>
		)
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
							wpSize="s"
						/>
					</div>
					<div className={filter('right-side')}>
						<Button 
							wpSize='s' view='ghost' 
							className={d({'indent-r': 's'})} 
							onClick={() => setLayout(layoutChanger)}
						>
							Вид списка
						</Button>
						{/* <ChoiceGroup
							isMultiple={false}
							items={filterItems.view}
							wpSize='s'
							className={d({'indent-r': 's'})}
						/> */}
						<Button wpSize='s' view='ghost' withIcon='left'>
							Добавить болванку
						</Button>
					</div>
				</header>

				{projectListMarkup}
				
			</main>
		</>
  );
};

export { AllProjectsPage };