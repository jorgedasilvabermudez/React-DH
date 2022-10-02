import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import ContentRowTop from './ContentRowTop';

const ContentWrapper = () => {
  return (
	<>	
		{/* <!-- Content Wrapper --> */}
		<div id="content-wrapper" className="d-flex flex-column">
			{/* <!-- Main Content --> */}
			<div id="content">
			<TopBar />
			<ContentRowTop />
			</div>
			{/* <!-- End of MainContent --> */}
			<Footer />
		{/* <!-- End of Content Wrapper --> */}
		</div>
  	</>
  )
}

export default ContentWrapper