import Image from 'next/image'
import PageHeader from "../../components/PageHeader";
import SideNavigation from "../../components/SideNavigation"
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";


const Tab = ({ children }) => {
  const { onClick } = useTabState();
  const isActive = usePanelState();
  return <a className={`${isActive === true ? "active" :""} border-transparent text-wareDarkGrey hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 medium text-lg `} onClick={onClick}>{children}</a>
};

const Panel = ({ children }) => {
  const isActive = usePanelState();
  return isActive ? <p>{children}</p> : null;
};

export default () => (
    <div>
    <PageHeader title="Tabs"/>
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-wareDarkBlue ">
        <div className="h-screen flex bg-white">
            <div className="md:flex md:flex-shrink-0">
                <SideNavigation />
            </div>
            <div className="flex flex-col w-0 flex-1">
                <main className="flex-1 relative z-0 focus:outline-none">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <h1 className="text-2xl font-semibold text-wareMedBlue">Tab examples</h1>
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 divide-y divide-wareLightGrey">
                            <div className="py-16">
                                <div className="mb-10">
                                    <h2 className="mb-2 text-lg">Standard tab</h2>
                                    <p className="text-wareDarkGrey">This type of tab is used throughout the application and are used when the data being displayed. tabs are used extensively to show data without making the user navigate to a new page.</p>
                                </div>
                                <Tabs>
                                    <div className="border-b border-gray-200">
                                        <div className="-mb-px flex space-x-8 cursor-pointer" aria-label="Tabs"> 
                                            <Tab>Item one (100)</Tab>
                                            <Tab>Item two (100)</Tab>
                                            <Tab>Item three (100)</Tab>
                                            <Tab>Item four (100)</Tab>
                                        </div>
                  
                                    </div>
                                    <Panel>Panel 2</Panel>
                                    <Panel>Panel 3</Panel>
                                    <Panel>Panel 4</Panel>
                                    <Panel>Panel 2</Panel>
                                    <div class="bg-white overflow-hidden shadow rounded-lg mt-10">
                                        <div class="px-4 py-5 sm:p-6">
                                            <h1>content</h1>
                                        </div>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</div>
);




