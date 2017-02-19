//
//  ReviewVC.swift
//  Chopchop
//
//  Created by Goodnews on 2017. 2. 19..
//  Copyright © 2017년 goodnews. All rights reserved.
//

import UIKit

class ReviewVC: UICollectionViewController, UICollectionViewDelegateFlowLayout {

    
    let reviewCellId = "reviewCellId"
    let commentCellId = "commentCellId"
    
    override func viewDidLoad() {
        super.viewDidLoad()

        navigationItem.title = "ReviewVC"

        collectionView?.backgroundColor = .white
        
        self.collectionView?.register(ReviewCell.self, forCellWithReuseIdentifier: reviewCellId)
        self.collectionView?.register(CommentCell.self, forCellWithReuseIdentifier: commentCellId)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        
    }
    
    override func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 10
    }
    override func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        if indexPath.item == 0 {
            let reviewCell = collectionView.dequeueReusableCell(withReuseIdentifier: reviewCellId, for: indexPath) as! ReviewCell
            
            return reviewCell
        } else {
            let commentCell = collectionView.dequeueReusableCell(withReuseIdentifier: commentCellId, for: indexPath) as! CommentCell
            commentCell.backgroundColor = UIColor.red
            return commentCell
        }
        
    }
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: collectionView.frame.width, height: 200)
    }
    

}
