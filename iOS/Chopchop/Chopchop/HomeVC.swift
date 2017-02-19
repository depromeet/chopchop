//
//  HomeVC.swift
//  Chopchop
//
//  Created by Goodnews on 2017. 2. 14..
//  Copyright © 2017년 goodnews. All rights reserved.
//

import UIKit

class HomeVC: UIViewController {
    
    
    let scrollView: UIScrollView = {
        let sv = UIScrollView()
        return sv
    }() // 스크롤뷰
    
    let bannerImageView: UIImageView = {
        let iv = UIImageView()
        iv.backgroundColor = .blue
        return iv
    }() // 광고
    
    private let roomLabel: UILabel = {
        let label = UILabel()
        label.text = "인기방"
        return label
    }() // '인기방' 라벨
    let roomsCollectionView: UICollectionView = {
        let layout = UICollectionViewFlowLayout()
        layout.scrollDirection = .horizontal
        let cv = UICollectionView(frame: .zero, collectionViewLayout: layout)
        cv.backgroundColor = .clear
        return cv
    }() // 인기방
    
    private let namedLabel: UILabel = {
        let label = UILabel()
        label.text = "이 구역의 네임드"
        return label
    }() // '이 구역의 네임드' 라벨
    let allNamedView: UIView = {
        let view = UIView()
        
        view.backgroundColor = .green
        return view
    }() // 이 구역의 네임드
    
    private let reviewLabel: UILabel = {
        let label = UILabel()
        label.text = "인기 리뷰"
        return label
    }() // 인기리뷰 라벨
    let reviewCollectionView: UICollectionView = {
        let layout = UICollectionViewFlowLayout()
        let cv = UICollectionView(frame: .zero, collectionViewLayout: layout)
        
        cv.backgroundColor = .clear
        return cv
    }() // 인기리뷰 뷰
    
    
    let restaurantsCollectionView: UICollectionView = {
        let layout = UICollectionViewFlowLayout()
        layout.scrollDirection = .horizontal
        let cv = UICollectionView(frame: .zero, collectionViewLayout: layout)
        cv.backgroundColor = .clear
        
        return cv
    }() // 인기식당
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupViews()
        configCollectionView()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        
    }
    
    let roomId = "roomId"
    let restaurantId = "restaurantId"
    let reviewCellId = "reviewId"

    
    func configCollectionView() {
        roomsCollectionView.delegate = self
        roomsCollectionView.dataSource = self
        roomsCollectionView.register(FamousRoomCell.self, forCellWithReuseIdentifier: roomId)
        
        restaurantsCollectionView.delegate = self
        restaurantsCollectionView.dataSource = self
        restaurantsCollectionView.register(RestaurantCell.self, forCellWithReuseIdentifier: restaurantId)
        
        
        reviewCollectionView.delegate = self
        reviewCollectionView.dataSource = self
        reviewCollectionView.register(ReviewCell.self, forCellWithReuseIdentifier: reviewCellId)
        
    }
    
    
    
    
    
    //    private let restaurantLabel: UILabel = {
    //        let label = UILabel()
    //        label.text = "인기식당"
    //        return label
    //    }() // '인기식당' 라벨
    
    
    
    
    func setupViews() {
        view.backgroundColor = .white
        title = "Home"
        
        view.addSubview(scrollView)
        
        scrollView.addSubview(bannerImageView)
        
        scrollView.addSubview(namedLabel)
        scrollView.addSubview(allNamedView)
        
        scrollView.addSubview(roomLabel)
        scrollView.addSubview(roomsCollectionView)
        
        scrollView.addSubview(reviewLabel)
        scrollView.addSubview(reviewCollectionView)
        
        //        scrollView.addSubview(restaurantLabel)
        //        scrollView.addSubview(restaurantsCollectionView)
        
        
        
        
        
        let width = view.frame.width
        
        scrollView.frame = view.frame
        bannerImageView.frame = CGRect(x: 0, y: 8, width: width, height: width * (9/16))
        
        namedLabel.frame = CGRect(x: 14, y: bannerImageView.frame.maxY + 16, width: 200, height: 24)
        allNamedView.frame = CGRect(x: 0, y: namedLabel.frame.maxY + 4, width: width, height: 150)
        
        
        
        roomLabel.frame = CGRect(x: 14, y: allNamedView.frame.maxY + 16, width: 200, height: 24)
        roomsCollectionView.frame = CGRect(x: 0, y: roomLabel.frame.maxY + 4, width: width, height: 120)
        
        
        reviewLabel.frame = CGRect(x: 14, y: roomsCollectionView.frame.maxY + 16, width: 200, height: 24)
        reviewCollectionView.frame = CGRect(x: 0, y: reviewLabel.frame.maxY + 4, width: width, height: 360 + 4)
        

        //        restaurantLabel.frame = CGRect(x: 14, y: roomsCollectionView.frame.maxY + 16, width: 200, height: 24)
        //        restaurantsCollectionView.frame = CGRect(x: 0, y: restaurantLabel.frame.maxY + 4, width: width, height: 150)
        
        scrollView.contentSize = CGSize(width: width, height: reviewCollectionView.frame.maxY + 16 + 49)
        
        
    }
    
    
    
    
}

extension HomeVC: UICollectionViewDataSource, UISearchControllerDelegate, UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 3
    }
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        switch collectionView {
        case roomsCollectionView:
            let cell = collectionView.dequeueReusableCell(withReuseIdentifier: roomId, for: indexPath) as! FamousRoomCell
            cell.backgroundColor = .red
            return cell
        case reviewCollectionView:
            let cell = collectionView.dequeueReusableCell(withReuseIdentifier: reviewCellId, for: indexPath) as! ReviewCell
            cell.backgroundColor = .red
            return cell
        default:
            let cell = collectionView.dequeueReusableCell(withReuseIdentifier: restaurantId, for: indexPath) as! RestaurantCell
            cell.backgroundColor = .orange
            return cell
        }
    } // 셀 내용
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        switch collectionView {
        case roomsCollectionView:
            return CGSize(width: 200, height: collectionView.frame.height)
        case reviewCollectionView:
            return CGSize(width: collectionView.frame.width - 28, height: 250)
        default:
            return CGSize(width: 150, height: collectionView.frame.height)
        }
        
    } // 셀 사이즈
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, insetForSectionAt section: Int) -> UIEdgeInsets {
        return UIEdgeInsets(top: 0, left: 14, bottom: 0, right: 14)
    }
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        switch collectionView {
        case reviewCollectionView:
            return 1
        default:
            return 8
        }
    }
}
