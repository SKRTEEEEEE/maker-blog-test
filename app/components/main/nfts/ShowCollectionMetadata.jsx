const { MediaRenderer } = require("@thirdweb-dev/react")

export const ShowCollectionMetadata = ({ metadata: contactsCollectionMetadata }) => {
    return(
        <div>
             <h2> <strong>{contactsCollectionMetadata?.name}</strong> <i>Collection</i> - {contactsCollectionMetadata?.symbol}</h2>
            <p>{contactsCollectionMetadata?.description}</p>
            <h3>Programmed by: <a href={contactsCollectionMetadata?.social_urls?.github||"#"}><cite>SKRTEEEEEE</cite></a> </h3>
            <MediaRenderer src={contactsCollectionMetadata?.image} width="100%"
              height="auto"
              style={{
                borderRadius: '20px',
                maxWidth: '300px',
              }} alt="Contacts Collection NFT"/>
        
        </div>
    )
}