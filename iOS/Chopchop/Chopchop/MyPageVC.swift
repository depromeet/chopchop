//
//  MyPageVC.swift
//  Chopchop
//
//  Created by Goodnews on 2017. 2. 16..
//  Copyright © 2017년 goodnews. All rights reserved.
//

import UIKit

class MyPageVC: UIViewController {

    
    let scrollView: UIScrollView = {
        let sv = UIScrollView()
        return sv
    }() // 스크롤뷰
    
    let profileImgView: UIImageView = {
        let iv = UIImageView()
        iv.backgroundColor = UIColor.cyan
        iv.layer.cornerRadius = 75
        iv.layer.masksToBounds = true
        return iv
    }() // 프로필 이미지
    
    let nameLabel: UILabel = {
        let label = UILabel()
        label.text = "아이디아이디"
        label.textAlignment = .center
        return label
    }() // 네임 라벨
    
    let myReviewsCollectionView: UICollectionView = {
        let layout = UICollectionViewFlowLayout()
        let cv = UICollectionView(frame: .zero, collectionViewLayout: layout)
        
        cv.backgroundColor = .white
        
        return cv
    }()
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        configCollectionViews()
        setupViews()
    }
    
    func setupViews() {
        title = "MyPage"
        view.backgroundColor = .white
        
        scrollView.frame = view.frame
        
        view.addSubview(scrollView)
        
        let width = view.frame.width
        
        scrollView.addSubview(profileImgView)
        scrollView.addSubview(nameLabel)
        
        scrollView.addSubview(myReviewsCollectionView)
        
        profileImgView.frame = CGRect(x: (width - 150) / 2, y: 8, width: 150, height: 150)
        nameLabel.frame = CGRect(x: 0, y: profileImgView.frame.maxY + 4, width: width, height: 20)
        
        myReviewsCollectionView.frame = CGRect(x: 0, y: nameLabel.frame.maxY + 16, width: width, height: 1200)
        scrollView.contentSize = CGSize(width: width, height: myReviewsCollectionView.frame.maxY + 16 + 49)
        
    }
    
    let reviewCellId = "reviewCellId"
    
    func configCollectionViews() {
        myReviewsCollectionView.delegate = self
        myReviewsCollectionView.dataSource = self
        myReviewsCollectionView.register(ReviewCell.self, forCellWithReuseIdentifier: reviewCellId)
        
        
        scrollView.delegate = self
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
}

extension MyPageVC: UICollectionViewDataSource, UICollectionViewDelegateFlowLayout, UIScrollViewDelegate  {
    
    // 스크롤뷰 밑으로 내려가면 새로고침하기 {
    func scrollViewDidScroll(_ scrollView: UIScrollView) {
        if scrollView.contentOffset.y == (scrollView.contentSize.height - scrollView.frame.size.height) {
            print("scroll to bottom")
        }
    }
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 8
    } // 셀 개수
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        switch collectionView {
        
        default:
            let cell = collectionView.dequeueReusableCell(withReuseIdentifier: reviewCellId, for: indexPath) as! ReviewCell
            
            cell.layer.borderColor = UIColor.gray.cgColor
            cell.layer.borderWidth = 0.5
            return cell
        }
    } // 셀 내용
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        switch collectionView {
        case myReviewsCollectionView:
            return CGSize(width: collectionView.frame.width, height: 150)
        default:
            return CGSize(width: 150, height: collectionView.frame.height)
        }
        
    } // 셀 사이즈
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, insetForSectionAt section: Int) -> UIEdgeInsets {
        return UIEdgeInsets(top: 0, left: 14, bottom: 0, right: 14)
    } // 셀 여백
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        switch collectionView {
        case myReviewsCollectionView:
            return 0
        default:
            return 8
        }
    } // 셀 간격
    
    
    
}
