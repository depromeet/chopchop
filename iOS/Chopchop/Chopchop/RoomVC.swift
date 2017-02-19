//
//  RoomVC.swift
//  Chopchop
//
//  Created by Goodnews on 2017. 2. 19..
//  Copyright © 2017년 goodnews. All rights reserved.
//

import UIKit

class RoomVC: UIViewController {

    let scrollView: UIScrollView = {
        let sv = UIScrollView()
        
        return sv
    }()
    
    let roomImgView: RoomImgView = {
        let iv = RoomImgView(frame: .zero)
        
        iv.backgroundColor = UIColor.blue
        return iv
    }() // 방 메인 이미지뷰
    
    
    let reviewsCollectionView: UICollectionView = {
        let layout = UICollectionViewFlowLayout()
        let cv = UICollectionView(frame: .zero, collectionViewLayout: layout)
        cv.backgroundColor = .clear
        return cv
    }()
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        configCollectionView()
        setupViews()
        
        
    }
    
    let reviewCellId = "reviewCellId"
    
    func configCollectionView() {
        reviewsCollectionView.dataSource = self
        reviewsCollectionView.delegate = self
        
        reviewsCollectionView.register(ReviewCell.self, forCellWithReuseIdentifier: reviewCellId)
    }
    

    func setupViews() {
        navigationItem.title = "RoomVC"
        view.backgroundColor = .white
        
        view.addSubview(scrollView)
        
        scrollView.frame = view.frame
        
        
        scrollView.addSubview(roomImgView)
        scrollView.addSubview(reviewsCollectionView)
        
        let width = view.frame.width
    
        roomImgView.frame = CGRect(x: 0, y: 8, width: width, height: width * (9/16))
        reviewsCollectionView.frame = CGRect(x: 0, y: roomImgView.frame.maxY + 8, width: width, height: 1000)
        
        scrollView.contentSize = CGSize(width: width, height: reviewsCollectionView.frame.maxY + 16 + 49)
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    


}

extension RoomVC: UICollectionViewDataSource, UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 3
    }
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: collectionView.frame.width, height: 300)
    }
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: reviewCellId, for: indexPath) as! ReviewCell
        
        return cell
    }
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        // 룸에서 리뷰를 선택했을 때
        let layout = UICollectionViewFlowLayout()
        let reviewVC = ReviewVC(collectionViewLayout: layout)
        
        self.navigationController?.pushViewController(reviewVC, animated: true)
        

    }
    
}
