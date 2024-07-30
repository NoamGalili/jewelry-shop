const Jewelry = require ('../models/branches')

const createBranch = async (branchData) => 
    {
      try 
      {
        const newBranch = new Branch({
            BranchId: branchData.BranchId,
            BranchName: branchData.BranchName,
            BranchCoordinates: branchData.BranchCoordinates,
            BranchAddress: branchData.BranchAddress,
            BranchOpeningHours: branchData.BranchOpeningHours,
            BranchManager: branchData.BranchManager,
            BranchManagerPhoto: branchData.BranchManagerPhoto
        });
    
        await newBranch.save();
        return newBranch;
      }
      
      catch (error) 
      {
        console.error('Error creating branch:', error);
        throw error; 
      }
    }

module.exports = 
{
  
}
