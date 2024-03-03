function Footer(){
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '50vh', marginTop: "-100px" }}>
          {/* Your main content goes here */}
          
          <footer className="bg-body-tertiary text-center text-lg-start mt-auto">
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 1)', color: 'white' }}>
              @Phisherman.v1 2024
            </div>
          </footer>
        </div>
      );
      
}

export default Footer;