// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.4.25 <0.7.0;

import "./tokens/nf-token-metadata.sol";
import "./ownership/ownable.sol";
import "./utils/address-utils.sol";
import "./math/safe-math.sol";

contract ElderCoin is
    NFTokenMetadata,
    Ownable
{
    using SafeMath for uint256;
    using AddressUtils for address;

    /**
    * @dev Contract constructor. Sets metadata extension `name` and `symbol`.
    */
    constructor()
    public
    {
        nftName = "Outernet Original Founder";
        nftSymbol = "OUTF";
    }

    /**
    * @dev Mints a new NFT.
    * @param _to The address that will own the minted NFT.
    * @param _tokenId of the NFT to be minted by the msg.sender.
    * @param _uri String representing RFC 3986 URI.
    */
    function mint(
        address _to,
        uint256 _tokenId,
        string calldata _uri
    )
    external
    onlyOwner
    {
        super._mint(_to, _tokenId);
        super._setTokenUri(_tokenId, _uri);
    }
}