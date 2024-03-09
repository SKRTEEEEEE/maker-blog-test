const { MediaRenderer } = require("@thirdweb-dev/react")

export const ShowCollectionMetadata = ({ metadata: contactsCollectionMetadata }) => {
    return(
        <div className=" md:grid md:w-1/5 flex gap-4 align-center space-between">
          <div className="md:w-2/3 w-20">
            <MediaRenderer src={contactsCollectionMetadata?.image} width="100%"
              height="auto"
              style={{
                borderRadius: '20px',
                maxWidth: '100%',
              }} alt="Contacts Collection NFT"/></div>
            <h2 className="md:inline flex flex-col"> <strong>{contactsCollectionMetadata?.name}</strong> <i>Collection</i> - {contactsCollectionMetadata?.symbol}</h2>
            <p>{contactsCollectionMetadata?.description}</p>
            <h3>Programmed by: <a href={contactsCollectionMetadata?.social_urls?.github||"#"}><cite>SKRTEEEEEE</cite></a> </h3>
        
        </div>
    )
}